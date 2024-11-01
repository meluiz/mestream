import { defineTokens } from '@pandacss/dev'
import radii from './radii'

export default defineTokens({
  radii,
  fonts: {
    sans: {
      value: 'var(--font-geist-sans), system-ui, sans-serif',
    },
    mono: {
      value: 'var(--font-geist-mono), system-ui, sans-serif',
    },
  },
})
