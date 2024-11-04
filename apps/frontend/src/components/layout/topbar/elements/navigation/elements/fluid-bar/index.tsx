import { AnimatePresence, motion } from 'framer-motion'
import { css } from 'pandacss/css'

interface Layout {
  width: number
  height: number
  x: number
  y: number
}

interface FluidBar {
  isVisible: boolean
  layout: Layout
}

const classes = css({
  position: 'absolute',
  display: 'block',
  bgColor: 'gray.800',
  rounded: 'md',
  pointerEvents: 'none',
  zIndex: 0,
})

const animation = {
  initial: (layout: Layout) => ({ ...layout, opacity: 0 }),
  animate: (layout: Layout) => ({ ...layout, opacity: 1 }),
  exit: { opacity: 0 },
  transition: { type: 'tween' },
}

const FluidBar: React.FC<FluidBar> = (props) => {
  const { isVisible, layout } = props

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={classes}
          initial={animation.initial(layout)}
          animate={animation.animate(layout)}
          exit={animation.exit}
          transition={animation.transition}
        />
      )}
    </AnimatePresence>
  )
}

export default FluidBar
