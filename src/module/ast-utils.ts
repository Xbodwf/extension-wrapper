// AST utilities using Babel parser and traverse
import { parse } from "@babel/parser"
import traverse, { type NodePath } from "@babel/traverse"
import generate from "@babel/generator"
import * as t from "@babel/types"
import type { Module } from "./types" // Assuming Module is defined in another file

export function parseCode(code: string) {
  try {
    return parse(code, {
      sourceType: "unambiguous",
      plugins: ["jsx", "typescript"],
      errorRecovery: true,
      allowReturnOutsideFunction: true,
    })
  } catch (error) {
    throw new Error(`Failed to parse code: ${error}`)
  }
}

export function generateCode(ast: t.Node): string {
  const result = generate(
    ast,
    {
      retainLines: false,
      compact: false,
      concise: false,
      comments: true,
      jsescOption: {
        minimal: true,
      },
    },
    undefined,
  )
  return result.code
}

export function findWebpackBootstrap(ast: t.File): NodePath | null {
  let bootstrapPath: NodePath | null = null

  traverse(ast, {
    CallExpression(path) {
      // Look for webpack bootstrap pattern: (function(modules) { ... })({...})
      const { callee, arguments: args } = path.node

      if (t.isFunctionExpression(callee) && args.length > 0 && t.isObjectExpression(args[0])) {
        const params = callee.params
        if (params.length > 0 && t.isIdentifier(params[0])) {
          bootstrapPath = path
          path.stop()
        }
      }
    },
  })

  return bootstrapPath
}

export function extractWebpackModules(modulesObject: t.ObjectExpression): Map<string | number, Module> {
  const modules = new Map<string | number, Module>()

  for (const prop of modulesObject.properties) {
    if (!t.isObjectProperty(prop) && !t.isObjectMethod(prop)) continue

    let moduleId: string | number
    let moduleFunction: t.Function | null = null

    // Get module ID
    if (t.isIdentifier(prop.key)) {
      moduleId = prop.key.name
    } else if (t.isNumericLiteral(prop.key)) {
      moduleId = prop.key.value
    } else if (t.isStringLiteral(prop.key)) {
      moduleId = prop.key.value
    } else {
      continue
    }

    // Get module function
    if (t.isObjectProperty(prop)) {
      if (t.isFunctionExpression(prop.value) || t.isArrowFunctionExpression(prop.value)) {
        moduleFunction = prop.value
      }
    } else if (t.isObjectMethod(prop)) {
      moduleFunction = t.functionExpression(null, prop.params, prop.body, prop.generator, prop.async)
    }

    if (moduleFunction) {
      const code = generateCode(moduleFunction)
      modules.set(moduleId, {
        id: moduleId,
        code,
        dependencies: [],
      })
    }
  }

  return modules
}

export function findBrowserifyModules(ast: t.File): Map<string | number, Module> {
  const modules = new Map<string | number, Module>()

  traverse(ast, {
    ObjectExpression(path) {
      // Browserify pattern: {1: [function(require,module,exports){...}, {...}], ...}
      const props = path.node.properties

      for (const prop of props) {
        if (!t.isObjectProperty(prop)) continue

        let moduleId: string | number
        if (t.isNumericLiteral(prop.key)) {
          moduleId = prop.key.value
        } else if (t.isStringLiteral(prop.key)) {
          moduleId = prop.key.value
        } else {
          continue
        }

        // Check if value is an array [function, deps]
        if (t.isArrayExpression(prop.value) && prop.value.elements.length > 0) {
          const funcElement = prop.value.elements[0]
          if (funcElement && (t.isFunctionExpression(funcElement) || t.isArrowFunctionExpression(funcElement))) {
            const code = generateCode(funcElement)
            modules.set(moduleId, {
              id: moduleId,
              code,
              dependencies: [],
            })
          }
        }
      }
    },
  })

  return modules
}
