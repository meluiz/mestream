import { AnimatePresence, motion } from 'framer-motion'
import { css } from 'pandacss/css'
import React from 'react'

import { useFirstMountState } from 'react-use'

interface Layout {
  width: number
  height: number
  x: number
  y: number
}

interface FluidTab {
  offset: number
  layout: Layout
}

const classes = css({
  position: 'absolute',
  display: 'block',
  bgColor: 'gray.50',
  pointerEvents: 'none',
})

const animation = {
  initial: (layout: Layout) => ({
    ...layout,
    height: '0.0625rem',
    top: '100%',
    opacity: 0,
  }),
  animate: (layout: Layout, offset: number) => ({
    ...layout,
    x: layout.x + offset,
    height: '0.0625rem',
    top: '100%',
    opacity: 1,
  }),
  exit: { opacity: 0 },
  transition: (isFirstRender: boolean) => ({
    type: 'tween',
    duration: isFirstRender ? 0 : 0.3,
  }),
}

const FluidTab: React.FC<FluidTab> = (props) => {
  const { layout, offset } = props
  const isFirstAnimation = React.useRef(true)

  return (
    <motion.div
      className={classes}
      initial={animation.initial(layout)}
      animate={animation.animate(layout, offset)}
      exit={animation.exit}
      onAnimationComplete={() => {
        isFirstAnimation.current = false
      }}
      transition={{
        type: 'tween',
        duration: isFirstAnimation.current ? 0 : undefined,
      }}
    />
  )
}

export default FluidTab
