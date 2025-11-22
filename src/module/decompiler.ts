// Main decompiler entry point
import type { DecompileOptions, DecompileResult, ExtractedClass } from "./types"
import { unpackBundle, detectBundleType } from "./unpacker"
import { deobfuscate, removeDeadCode } from "./deobfuscator"
import { beautify, formatModuleCode } from "./beautifier"
import { extractClassesFromModules } from "./class-extractor"

export class JSDecompiler {
  decompile(code: string, options: DecompileOptions = {}): DecompileResult {
    try {
      const { unpack = true, deobfuscate: shouldDeobfuscate = true, beautify: shouldBeautify = true } = options

      let processedCode = code
      const modules = new Map<string, string>()
      let classes: ExtractedClass[] = []

      // Step 1: Detect and unpack bundle
      if (unpack) {
        const bundleType = detectBundleType(code)

        if (bundleType !== "unknown") {
          const bundleInfo = unpackBundle(code)

          if (bundleInfo.modules.size > 0) {
            // Process each module
            for (const [id, module] of bundleInfo.modules) {
              let moduleCode = module.code

              // Deobfuscate module
              if (shouldDeobfuscate) {
                moduleCode = deobfuscate(moduleCode)
                moduleCode = removeDeadCode(moduleCode)
              }

              // Beautify module
              if (shouldBeautify) {
                moduleCode = formatModuleCode(moduleCode, id)
              }

              modules.set(String(id), moduleCode)
            }

            // Combine all modules
            const moduleEntries = Array.from(modules.entries()).sort((a, b) => {
              const aNum = Number.parseInt(a[0])
              const bNum = Number.parseInt(b[0])
              if (!isNaN(aNum) && !isNaN(bNum)) {
                return aNum - bNum
              }
              return a[0].localeCompare(b[0])
            })

            processedCode = moduleEntries.map(([_, code]) => code).join("\n\n")
          }
        }
      }

      // Step 2: Deobfuscate (if not unpacked or no modules found)
      if (shouldDeobfuscate && modules.size === 0) {
        processedCode = deobfuscate(processedCode)
        processedCode = removeDeadCode(processedCode)
      }

      // Step 3: Beautify (if not unpacked or no modules found)
      if (shouldBeautify && modules.size === 0) {
        processedCode = beautify(processedCode)
      }

      if (modules.size > 0) {
        classes = extractClassesFromModules(modules)
        console.log("[Transpile] Extracted classes:", classes.length)
      } else {
        // If no modules were found, try to extract classes directly from the processed code
        classes = extractClassesFromModules(new Map([["main", processedCode]]))
        console.log("[Transpile] Extracted classes from raw code:", classes.length)
      }

      return {
        code: processedCode,
        modules: modules.size > 0 ? modules : undefined,
        classes: classes.length > 0 ? classes : undefined,
        success: true,
      }
    } catch (error) {
      return {
        code: "",
        success: false,
        error: error instanceof Error ? error.message : String(error),
      }
    }
  }

  detectBundleType(code: string): "webpack" | "browserify" | "unknown" {
    return detectBundleType(code)
  }
}

// Export convenience function
export function decompile(code: string, options?: DecompileOptions): DecompileResult {
  const decompiler = new JSDecompiler()
  return decompiler.decompile(code, options)
}

export { detectBundleType }
