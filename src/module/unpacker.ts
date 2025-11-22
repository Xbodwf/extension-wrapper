// Bundle unpacker for webpack and browserify
import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import generate from "@babel/generator"
import * as t from "@babel/types"
import type { BundleInfo, Module } from "./types"

export function detectBundleType(code: string): "webpack" | "browserify" | "unknown" {
  if (
    code.includes("__webpack_require__") ||
    code.includes("webpackJsonp") ||
    code.includes("webpackChunk") ||
    /self\.webpack[A-Za-z]+\s*=/.test(code) ||
    /__webpack_modules__/.test(code)
  ) {
    return "webpack"
  }

  // Check for browserify patterns
  if (code.includes("require=function") || /\{\s*\d+\s*:\s*\[function\s*$$require,\s*module,\s*exports$$/.test(code)) {
    return "browserify"
  }

  return "unknown"
}

export function unpackWebpack(code: string): BundleInfo {
  const modules = new Map<string | number, Module>()
  let entryPoint: string | number | undefined

  try {
    const ast = parse(code, {
      sourceType: "unambiguous",
      errorRecovery: true,
    })

    traverse(ast, {
      // Webpack 5 chunk format: (self.webpackChunk = self.webpackChunk || []).push([[chunkIds], {modules}])
      CallExpression(path) {
        const { callee, arguments: args } = path.node

        // Pattern: .push([[...], {...}])
        if (
          t.isMemberExpression(callee) &&
          t.isIdentifier(callee.property, { name: "push" }) &&
          args.length > 0 &&
          t.isArrayExpression(args[0])
        ) {
          const pushArg = args[0]

          // Look for [chunkIds, modules, ...] format
          if (pushArg.elements.length >= 2) {
            const modulesArg = pushArg.elements[1]

            if (modulesArg && t.isObjectExpression(modulesArg)) {
              extractModulesFromObject(modulesArg, modules)
            }
          }
        }

        // Webpack 4/5 IIFE format: (function(modules) { ... })({...})
        if (
          (t.isFunctionExpression(callee) || t.isArrowFunctionExpression(callee)) &&
          args.length > 0 &&
          t.isObjectExpression(args[0])
        ) {
          const params = callee.params
          if (params.length > 0) {
            extractModulesFromObject(args[0], modules)
          }
        }
      },

      // Webpack 5 format: var __webpack_modules__ = {...}
      VariableDeclarator(path) {
        const { id, init } = path.node

        if (t.isIdentifier(id) && id.name.includes("webpack_modules") && init && t.isObjectExpression(init)) {
          extractModulesFromObject(init, modules)
        }
      },
    })

    // Try to find entry point
    if (modules.size > 0) {
      // Common entry points
      if (modules.has(0)) entryPoint = 0
      else if (modules.has("0")) entryPoint = "0"
      else if (modules.has(1)) entryPoint = 1
      else entryPoint = Array.from(modules.keys())[0]
    }
  } catch (error) {
    console.error("[Transpile] Webpack unpacking error:", error)
  }

  return {
    type: "webpack",
    modules,
    entryPoint,
  }
}

function extractModulesFromObject(obj: t.ObjectExpression, modules: Map<string | number, Module>): void {
  for (const prop of obj.properties) {
    if (!t.isObjectProperty(prop) && !t.isObjectMethod(prop)) continue

    let moduleId: string | number
    let moduleFunction: t.Function | null = null

    // Get module ID from key
    if (t.isIdentifier(prop.key)) {
      moduleId = prop.key.name
    } else if (t.isNumericLiteral(prop.key)) {
      moduleId = prop.key.value
    } else if (t.isStringLiteral(prop.key)) {
      moduleId = prop.key.value
    } else if (t.isTemplateLiteral(prop.key) && prop.key.quasis.length === 1) {
      moduleId = prop.key.quasis[0].value.raw
    } else {
      continue
    }

    // Get module function from value
    if (t.isObjectProperty(prop)) {
      if (t.isFunctionExpression(prop.value) || t.isArrowFunctionExpression(prop.value)) {
        moduleFunction = prop.value
      }
    } else if (t.isObjectMethod(prop)) {
      moduleFunction = t.functionExpression(null, prop.params, prop.body, prop.generator, prop.async)
    }

    if (moduleFunction) {
      let code: string

      if (t.isBlockStatement(moduleFunction.body)) {
        // Generate code from function body statements only
        const bodyStatements = moduleFunction.body.body
        if (bodyStatements.length > 0) {
          code = bodyStatements
            .map((stmt) => {
              try {
                return generate(stmt, { comments: true }).code
              } catch (e) {
                console.error("[Transpile] Error generating statement:", e)
                return ""
              }
            })
            .filter(Boolean)
            .join("\n")
        } else {
          code = "// Empty module"
        }
      } else {
        // Arrow function with expression body
        try {
          code = generate(moduleFunction.body, { comments: true }).code
        } catch (e) {
          console.error("[Transpile] Error generating expression:", e)
          code = "// Error extracting module"
        }
      }

      const dependencies: (string | number)[] = []

      if (t.isBlockStatement(moduleFunction.body)) {
        traverse(
          t.file(t.program(moduleFunction.body.body)),
          {
            CallExpression(path) {
              const { callee, arguments: args } = path.node

              // Look for require() or __webpack_require__() calls
              if (
                (t.isIdentifier(callee, { name: "require" }) ||
                  t.isIdentifier(callee, { name: "__webpack_require__" }) ||
                  (t.isMemberExpression(callee) && t.isIdentifier(callee.property) && callee.property.name === "r")) &&
                args.length > 0
              ) {
                const arg = args[0]
                if (t.isNumericLiteral(arg)) {
                  dependencies.push(arg.value)
                } else if (t.isStringLiteral(arg)) {
                  dependencies.push(arg.value)
                }
              }
            },
          },
          undefined,
          {},
        )
      }

      modules.set(moduleId, {
        id: moduleId,
        code,
        dependencies,
      })
    }
  }
}

export function unpackBrowserify(code: string): BundleInfo {
  const modules = new Map<string | number, Module>()

  try {
    const ast = parse(code, {
      sourceType: "unambiguous",
      errorRecovery: true,
    })

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
          } else if (t.isIdentifier(prop.key)) {
            moduleId = prop.key.name
          } else {
            continue
          }

          // Check if value is an array [function, deps]
          if (t.isArrayExpression(prop.value) && prop.value.elements.length > 0) {
            const funcElement = prop.value.elements[0]
            if (funcElement && (t.isFunctionExpression(funcElement) || t.isArrowFunctionExpression(funcElement))) {
              const code = t.isBlockStatement(funcElement.body)
                ? funcElement.body.body.map((stmt) => generate(stmt).code).join("\n")
                : generate(funcElement.body).code

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
  } catch (error) {
    console.error("[Transpile] Browserify unpacking error:", error)
  }

  return {
    type: "browserify",
    modules,
    entryPoint: 1,
  }
}

export function unpackBundle(code: string): BundleInfo {
  const bundleType = detectBundleType(code)

  switch (bundleType) {
    case "webpack":
      return unpackWebpack(code)
    case "browserify":
      return unpackBrowserify(code)
    default:
      return {
        type: "unknown",
        modules: new Map(),
      }
  }
}
