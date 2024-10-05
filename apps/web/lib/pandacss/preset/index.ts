import { definePreset } from '@pandacss/dev'
import base from '@pandacss/preset-base'
import panda from '@pandacss/preset-panda'

import theme from './theme'
import patterns from './patterns'
import utilities from './utilities'

export const preset = definePreset({
  name: 'mestream/preset',
  presets: [base, panda],
  utilities,
  patterns,
  theme,
})
