'use client'
import { Avatar } from '@ark-ui/react'
import { styled } from 'pandacss/jsx'

export const Root = styled(Avatar.Root, {
  base: {
    display: 'inline-flex',
    align: 'center',
    justify: 'center',
    verticalAlign: 'middle',
  },
})

export const Image = styled(
  Avatar.Image,
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
  },
)
export const Fallback = styled(Avatar.Fallback, {
  base: {
    textTransform: 'uppercase',
  },
})
