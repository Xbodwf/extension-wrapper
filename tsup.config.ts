import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'ext-wrapper', // Replace it with your extension name
  entry: ['src/index.ts', 'src/index.js'],
  target: ['esnext'],
  format: ['iife'],
  outDir: 'dist',
  banner: {
    // Replace it with your extension's metadata
    js: `// Extension Wrapper
// By Xbodwf(https://github.com/Xbodwf)
`
  },
  platform: 'browser',
  clean: true,
  minify: true,
  define: {
    "process": "{}",
    "process.env": "{}"
  }
})
