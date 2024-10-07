'use client'
import type React from 'react'

import { type StyledComponent, styled } from 'pandacss/jsx'
import Link from 'next/link'

type StyledProps = React.ComponentProps<typeof Styled> & {
  as?: React.ElementType
}

// @ts-ignore
const Styled = styled(
  Link,
  {
    base: {
      objectFit: 'cover',
      userSelect: 'none',
      objectPosition: 'center',
    },
  },
  {
    defaultProps: {
      draggable: false,
    },
    shouldForwardProp: (props) => {
      return ['href'].includes(props)
    },
  },
)

export type AnchorProps = StyledComponent<'a', StyledProps>
export const Anchor = Styled as AnchorProps
