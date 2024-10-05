import { defineConfig } from '@pandacss/dev'
import { preset } from 'lib/pandacss'

export default defineConfig({
  exclude: [],
  watch: true,
  minify: true,
  preflight: true,
  gitignore: true,
  outdir: 'pandacss',
  jsxFramework: 'react',
  include: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  hash: {
    className: true,
    cssVar: false,
  },
  presets: [preset],
})
