'use client'
import type React from 'react'

import { type StyledComponent, styled } from 'pandacss/jsx'
import Image from 'next/image'

type StyledProps = React.ComponentProps<typeof Styled> & {
  as?: React.ElementType
}

// @ts-ignore
const Styled = styled(
  Image,
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
      return ['width', 'height', 'alt', 'src'].includes(props)
    },
  },
)

export type ImgProps = StyledComponent<'img', StyledProps>
export const Img = Styled as ImgProps
