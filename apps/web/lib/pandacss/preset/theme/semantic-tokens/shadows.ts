import { defineSemanticTokens } from '@pandacss/dev'

export default defineSemanticTokens.shadows({
  none: {
    value: '0 0 #0000',
  },
  default: {
    value: {
      _light: '0 1px 3px 0 {colors.gray.50/5}',
      _dark: '0 1px 3px 0 {colors.black/5}',
    },
  },
  sm: {
    value: {
      _light: `0 1px 2px 0 {colors.gray.50/5}`,
      _dark: `0 1px 2px 0 {colors.black/5}`,
    },
  },
  md: {
    value: {
      _light: `0 4px 6px -1px {colors.gray.50/5}, 0 2px 4px -2px {colors.gray.50/5}`,
      _dark: `0 4px 6px -1px {colors.black/5}, 0 2px 4px -2px {colors.black/5}`,
    },
  },
  lg: {
    value: {
      _light: `0 10px 15px -3px {colors.gray.50/5}, 0 4px 6px -4px {colors.gray.50/5}`,
      _dark: `0 10px 15px -3px {colors.black/5}, 0 4px 6px -4px {colors.black/5}`,
    },
  },
  xl: {
    value: {
      _light: `0 20px 25px -5px {colors.gray.50/5}, 0 10px 10px -6px {colors.gray.50/5}`,
      _dark: `0 20px 25px -5px {colors.black/5}, 0 10px 10px -6px {colors.black/5}`,
    },
  },
  '2xl': {
    value: {
      _light: `0 25px 50px -12px {colors.gray.50/5}`,
      _dark: `0 25px 50px -12px {colors.black/5}`,
    },
  },
})
