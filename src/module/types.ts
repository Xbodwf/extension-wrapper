// Core types for the decompiler
export interface DecompileOptions {
  unpack?: boolean
  deobfuscate?: boolean
  beautify?: boolean
}

export interface DecompileResult {
  code: string
  modules?: Map<string, string>
  classes?: ExtractedClass[]
  success: boolean
  error?: string
}

export interface Module {
  id: string | number
  code: string
  dependencies: (string | number)[]
}

export interface BundleInfo {
  type: "webpack" | "browserify" | "unknown"
  modules: Map<string | number, Module>
  entryPoint?: string | number
}

export interface ExtractedClass {
  name: string
  code: string
  type: "es6" | "es5"
  hasGetInfo: boolean
  moduleId?: string | number
  methods: string[]
}
