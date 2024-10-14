import { motion } from 'framer-motion'
import { Circle } from 'pandacss/jsx'
import { center } from 'pandacss/patterns'
import React from 'react'
import { Anchor } from '#components/ui'

interface MarkProps {
  isSticky: boolean
}

const Mark: React.FC<MarkProps> = (props) => {
  const { isSticky } = props

  const transform = `translateY(${isSticky ? 2.875 : 0}rem)`
  const size = isSticky ? '1.25rem' : '1.625rem'

  return (
    <Anchor
      href="/servers"
      className={center()}
      transition="transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1)"
      style={{ transform }}
      aria-label="Go to the servers list"
    >
      <Circle
        bgColor="accent.500"
        rounded="full"
        transition="transform 300ms cubic-bezier(0.25, 0.1, 0.25, 1)"
        // @ts-ignore
        as="span"
        style={{
          width: size,
          height: size,
        }}
        role="img"
        aria-label="Mestream Mark"
      />
    </Anchor>
  )
}

export default Mark
