// Basic deobfuscation transformations
import traverse from "@babel/traverse"
import * as t from "@babel/types"
import { parseCode, generateCode } from "./ast-utils"

export function deobfuscate(code: string): string {
  if (!code || code.trim().length === 0) {
    return code
  }

  try {
    const ast = parseCode(code)

    // Transform 1: Simplify string concatenation
    traverse(ast, {
      BinaryExpression(path) {
        if (path.node.operator === "+") {
          const { left, right } = path.node
          if (t.isStringLiteral(left) && t.isStringLiteral(right)) {
            path.replaceWith(t.stringLiteral(left.value + right.value))
          }
        }
      },
    })

    // Transform 2: Evaluate simple computed member expressions
    traverse(ast, {
      MemberExpression(path) {
        if (path.node.computed && t.isStringLiteral(path.node.property)) {
          const propertyName = path.node.property.value
          // Convert obj["prop"] to obj.prop if valid identifier
          if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(propertyName)) {
            path.node.computed = false
            path.node.property = t.identifier(propertyName)
          }
        }
      },
    })

    // Transform 3: Simplify sequence expressions
    traverse(ast, {
      SequenceExpression(path) {
        const expressions = path.node.expressions
        if (expressions.length === 1) {
          path.replaceWith(expressions[0])
        }
      },
    })

    // Transform 4: Remove void 0 (undefined)
    traverse(ast, {
      UnaryExpression(path) {
        if (path.node.operator === "void" && t.isNumericLiteral(path.node.argument) && path.node.argument.value === 0) {
          path.replaceWith(t.identifier("undefined"))
        }
      },
    })

    // Transform 5: Simplify boolean literals
    traverse(ast, {
      UnaryExpression(path) {
        if (path.node.operator === "!") {
          if (t.isNumericLiteral(path.node.argument)) {
            const value = path.node.argument.value
            path.replaceWith(t.booleanLiteral(value === 0))
          } else if (t.isBooleanLiteral(path.node.argument)) {
            path.replaceWith(t.booleanLiteral(!path.node.argument.value))
          }
        }
      },
    })

    return generateCode(ast)
  } catch (error) {
    console.error("[Transpile] Deobfuscation error:", error)
    return code
  }
}

export function removeDeadCode(code: string): string {
  if (!code || code.trim().length === 0) {
    return code
  }

  try {
    const ast = parseCode(code)

    // Remove unreachable code after return/throw
    traverse(ast, {
      BlockStatement(path) {
        const body = path.node.body
        let foundTerminator = false
        const newBody: t.Statement[] = []

        for (const statement of body) {
          if (foundTerminator) {
            break
          }
          newBody.push(statement)
          if (t.isReturnStatement(statement) || t.isThrowStatement(statement)) {
            foundTerminator = true
          }
        }

        if (newBody.length !== body.length) {
          path.node.body = newBody
        }
      },
    })

    // Remove empty if statements
    traverse(ast, {
      IfStatement(path) {
        if (
          t.isBlockStatement(path.node.consequent) &&
          path.node.consequent.body.length === 0 &&
          !path.node.alternate
        ) {
          path.remove()
        }
      },
    })

    return generateCode(ast)
  } catch (error) {
    console.error("[Transpile] Dead code removal error:", error)
    return code
  }
}
