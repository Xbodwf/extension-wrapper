// Code beautification
import { parseCode, generateCode } from "./ast-utils"

export function beautify(code: string): string {
  if (!code || code.trim().length === 0) {
    return code
  }

  try {
    const ast = parseCode(code)
    return generateCode(ast)
  } catch (error) {
    console.error("[Transpile] Beautification error:", error)
    return code
  }
}

export function formatModuleCode(code: string, moduleId: string | number): string {
  const header = `// ============================================\n// Module: ${moduleId}\n// ============================================\n\n`
  const beautified = beautify(code)
  return header + beautified
}
