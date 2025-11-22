// Class extractor for ES6 and ES5 classes
import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import generate from "@babel/generator"
import * as t from "@babel/types"
import type { ExtractedClass } from "./types"

export function extractClasses(code: string, moduleId?: string | number): ExtractedClass[] {
  const classes: ExtractedClass[] = []

  try {
    const ast = parse(code, {
      sourceType: "unambiguous",
      errorRecovery: true,
    })

    // Extract ES6 classes
    traverse(ast, {
      ClassDeclaration(path) {
        const className = path.node.id?.name
        if (!className) return

        const methods = extractClassMethods(path.node.body)
        const hasGetInfo = methods.includes("getInfo")

        try {
          const classCode = generate(path.node, { comments: true }).code

          classes.push({
            name: className,
            code: classCode,
            type: "es6",
            hasGetInfo,
            moduleId,
            methods,
          })
        } catch (e) {
          console.error("[Transpile] Error generating ES6 class:", e)
        }
      },

      // Also handle class expressions assigned to variables
      VariableDeclarator(path) {
        if (t.isIdentifier(path.node.id) && t.isClassExpression(path.node.init)) {
          const className = path.node.id.name
          const classExpr = path.node.init

          const methods = extractClassMethods(classExpr.body)
          const hasGetInfo = methods.includes("getInfo")

          try {
            const classCode = generate(path.parent as t.Node, { comments: true }).code

            classes.push({
              name: className,
              code: classCode,
              type: "es6",
              hasGetInfo,
              moduleId,
              methods,
            })
          } catch (e) {
            console.error("[Transpile] Error generating ES6 class expression:", e)
          }
        }
      },
    })

    // Extract ES5 constructor functions with prototype methods
    const es5Classes = extractES5Classes(ast, moduleId)
    classes.push(...es5Classes)
  } catch (error) {
    console.error("[Transpile] Class extraction error:", error)
  }

  return classes
}

function extractClassMethods(classBody: t.ClassBody): string[] {
  const methods: string[] = []

  for (const member of classBody.body) {
    if (t.isClassMethod(member) && t.isIdentifier(member.key)) {
      methods.push(member.key.name)
    } else if (t.isClassProperty(member) && t.isIdentifier(member.key)) {
      methods.push(member.key.name)
    }
  }

  return methods
}

function extractES5Classes(ast: t.File, moduleId?: string | number): ExtractedClass[] {
  const classes: ExtractedClass[] = []
  const constructorFunctions = new Map<string, t.FunctionDeclaration | t.FunctionExpression>()
  const prototypeMethods = new Map<string, Map<string, t.Node>>()

  // First pass: find constructor functions
  traverse(ast, {
    FunctionDeclaration(path) {
      const funcName = path.node.id?.name
      if (!funcName) return

      // Check if function name starts with uppercase (convention for constructors)
      if (funcName[0] === funcName[0].toUpperCase()) {
        constructorFunctions.set(funcName, path.node)
        prototypeMethods.set(funcName, new Map())
      }
    },

    VariableDeclarator(path) {
      if (t.isIdentifier(path.node.id) && t.isFunctionExpression(path.node.init)) {
        const funcName = path.node.id.name

        // Check if function name starts with uppercase
        if (funcName[0] === funcName[0].toUpperCase()) {
          constructorFunctions.set(funcName, path.node.init)
          prototypeMethods.set(funcName, new Map())
        }
      }
    },
  })

  // Second pass: find prototype method assignments
  traverse(ast, {
    AssignmentExpression(path) {
      const { left, right } = path.node

      // Pattern: ClassName.prototype.methodName = function() {...}
      if (
        t.isMemberExpression(left) &&
        t.isMemberExpression(left.object) &&
        t.isIdentifier(left.object.object) &&
        t.isIdentifier(left.object.property, { name: "prototype" }) &&
        t.isIdentifier(left.property)
      ) {
        const className = left.object.object.name
        const methodName = left.property.name

        if (prototypeMethods.has(className)) {
          prototypeMethods.get(className)!.set(methodName, path.node)
        }
      }
    },

    // Pattern: Object.defineProperty(ClassName.prototype, 'methodName', {...})
    CallExpression(path) {
      const { callee, arguments: args } = path.node

      if (
        t.isMemberExpression(callee) &&
        t.isIdentifier(callee.object, { name: "Object" }) &&
        t.isIdentifier(callee.property, { name: "defineProperty" }) &&
        args.length >= 2
      ) {
        const prototypeArg = args[0]
        const methodNameArg = args[1]

        if (
          t.isMemberExpression(prototypeArg) &&
          t.isIdentifier(prototypeArg.object) &&
          t.isIdentifier(prototypeArg.property, { name: "prototype" }) &&
          t.isStringLiteral(methodNameArg)
        ) {
          const className = prototypeArg.object.name
          const methodName = methodNameArg.value

          if (prototypeMethods.has(className)) {
            prototypeMethods.get(className)!.set(methodName, path.node)
          }
        }
      }
    },
  })

  // Build ES5 classes from constructor + prototype methods
  for (const [className, constructor] of constructorFunctions) {
    const methods = prototypeMethods.get(className)
    if (!methods || methods.size === 0) continue

    const methodNames = Array.from(methods.keys())
    const hasGetInfo = methodNames.includes("getInfo")

    try {
      // Generate code for constructor
      let classCode = generate(constructor, { comments: true }).code

      // Add prototype methods
      for (const [methodName, methodNode] of methods) {
        const methodCode = generate(methodNode, { comments: true }).code
        classCode += "\n" + methodCode
      }

      classes.push({
        name: className,
        code: classCode,
        type: "es5",
        hasGetInfo,
        moduleId,
        methods: methodNames,
      })
    } catch (e) {
      console.error("[Transpile] Error generating ES5 class:", e)
    }
  }

  return classes
}

export function extractClassesFromModules(modules: Map<string, string>): ExtractedClass[] {
  const allClasses: ExtractedClass[] = []

  for (const [moduleId, moduleCode] of modules) {
    const classes = extractClasses(moduleCode, moduleId)
    allClasses.push(...classes)
  }

  return allClasses
}
