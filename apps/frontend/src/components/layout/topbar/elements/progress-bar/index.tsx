import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionTemplate,
} from 'framer-motion'
import { css } from 'pandacss/css'

interface ProgressBarProps {
  state: string
  progress: MotionValue<number>
  onExitComplete?: () => void
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { state, progress, onExitComplete } = props
  const width = useMotionTemplate`${progress}%`

  const classes = css({
    height: '0.0625rem',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    bgColor: 'accent.500',
  })

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {state !== 'complete' && (
        <motion.span className={classes} style={{ width }} role="none" />
      )}
    </AnimatePresence>
  )
}

export default ProgressBar
