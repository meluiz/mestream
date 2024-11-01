import { definePreset } from '@pandacss/dev'
import base from '@pandacss/preset-base'
import panda from '@pandacss/preset-panda'

import patterns from './patterns'
import theme from './theme'
import utilities from './utilities'

const preset = definePreset({
  name: 'mestream/panda-preset',
  presets: [base, panda],
  utilities,
  patterns,
  theme,
  staticCss: {
    css: [
      {
        properties: {
          color: ['*'],
        },
      },
    ],
  },
})

export default preset
