import { defineUtility } from '@pandacss/dev'
import type { Property } from 'pandacss/types/csstype'

export default {
  extend: {
    size: defineUtility({
      className: 'size',
      property: 'width',
      transform: (value: Property.Width) => ({ width: value, height: value }),
    }),
    align: defineUtility({
      className: 'items',
      property: 'alignItems',
      transform: (value: Property.AlignItems) => ({ alignItems: value }),
    }),
    justify: defineUtility({
      className: 'justify',
      property: 'justifyContent',
      transform: (value: Property.JustifyContent) => ({
        justifyContent: value,
      }),
    }),
    direction: defineUtility({
      className: 'flex',
      property: 'flexDirection',
      transform: (value: Property.FlexDirection) => ({ flexDirection: value }),
    }),
    shrink: defineUtility({
      className: 'shrink',
      property: 'flexShrink',
      transform: (value: Property.FlexShrink) => ({ flexShrink: value }),
    }),
    grow: defineUtility({
      className: 'grow',
      property: 'flexGrow',
      transform: (value: Property.FlexGrow) => ({ flexGrow: value }),
    }),
    wrap: defineUtility({
      className: 'wrap',
      property: 'flexWrap',
      transform: (value: Property.FlexWrap) => ({ flexWrap: value }),
    }),
    basis: defineUtility({
      className: 'basis',
      property: 'flexBasis',
      transform: (value: Property.FlexBasis) => ({ flexBasis: value }),
    }),
  },
}
