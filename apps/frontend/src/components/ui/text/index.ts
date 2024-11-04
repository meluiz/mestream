import type React from 'react'

import { type StyledComponent, styled } from 'pandacss/jsx'

type StyledProps = React.ComponentProps<typeof Styled> & {
  as?: React.ElementType
}

const Styled = styled('p', {
  base: {
    cursor: 'text',
    color: 'gray.50',
  },
  variants: {
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
      justify: { textAlign: 'justify' },
    },
    size: {
      xs: { fontSize: '0.75rem', lineHeight: '1rem' },
      sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },
      base: { fontSize: '1rem', lineHeight: '1.5rem' },
      lg: { fontSize: '1.125rem', lineHeight: '1.75rem' },
      xl: { fontSize: '1.25rem', lineHeight: '1.75rem' },
      '2xl': { fontSize: '1.5rem', lineHeight: '2rem' },
      '3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' },
      '4xl': {
        fontSize: '2.25rem',
        lineHeight: '2.5rem',
        letterSpacing: '-0.02em',
      },
      '5xl': {
        fontSize: '3rem',
        lineHeight: '1',
        letterSpacing: '-0.02em',
      },
      '6xl': {
        fontSize: '6xl',
        lineHeight: '3.75rem',
        letterSpacing: '-0.02em',
      },
      '7xl': {
        fontSize: '4.5rem',
        lineHeight: '1',
        letterSpacing: '-0.02em',
      },
      '8xl': {
        fontSize: '6rem',
        lineHeight: '1',
        letterSpacing: '-0.02em',
      },
      '9xl': {
        fontSize: '8rem',
        lineHeight: '1',
        letterSpacing: '-0.02em',
      },
    },
  },
  defaultVariants: {
    size: 'base',
    align: 'left',
  },
})

export type TextProps = StyledComponent<'p', StyledProps>
export const Text = Styled as TextProps
