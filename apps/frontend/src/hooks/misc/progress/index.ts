import React from 'react'

import { useSpring } from 'framer-motion'
import { useInterval } from 'react-use'
import { number } from '#utils/helpers'

type ProgressState = 'idle' | 'in-progress' | 'completing' | 'complete'

export const useProgress = () => {
  const [state, set] = React.useState<ProgressState>('idle')

  const value = useSpring(0, {
    mass: 0.5,
    damping: 25,
    stiffness: 300,
    restDelta: 0.1,
  })

  const reset = () => {
    set('idle')
  }

  const start = () => {
    set('in-progress')
  }

  const done = () => {
    set((prev) =>
      prev === 'idle' || prev === 'in-progress' ? 'completing' : prev,
    )
  }

  useInterval(
    () => {
      if (value.get() === 100) {
        value.jump(0)
      }

      const current = value.get()

      let diff

      if (current === 0) {
        diff = 15
      } else if (current < 50) {
        diff = number.range(1, 10)
      } else {
        diff = number.range(1, 5)
      }

      value.set(Math.min(current + diff, 99))
    },
    state === 'in-progress' ? 300 : null,
  )

  React.useEffect(() => {
    switch (state) {
      case 'idle': {
        value.jump(0)
        break
      }
      case 'completing': {
        value.set(100)
        break
      }
    }

    return value.on('change', (latest) => {
      if (latest === 100) {
        set('complete')
      }
    })
  }, [value, state])

  return {
    state,
    value,
    start,
    done,
    reset,
  }
}
