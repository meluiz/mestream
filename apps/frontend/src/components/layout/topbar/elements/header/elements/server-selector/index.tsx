'use client'

import React from 'react'
import { Menu } from '#components/ui'

import Content from './elements/content'
import Trigger from './elements/trigger'

interface OpenChangeOptions {
  open: boolean
}

const ServerSelector = () => {
  const trigger = React.useRef<HTMLButtonElement>(null)

  const [open, toggle] = React.useState(false)
  const [point, set] = React.useState({ x: 0, y: 0 })

  const handleOpenChange = ({ open }: OpenChangeOptions) => {
    toggle(open)
  }

  React.useLayoutEffect(() => {
    if (trigger.current) {
      const {
        width,
        height,
        x: posX,
        y: posY,
      } = trigger.current.getBoundingClientRect()

      const x = posX - width / 2
      const y = posY + height

      set({ x, y })
    }
  }, [])

  return (
    <Menu.Root
      anchorPoint={point}
      open={open}
      onOpenChange={handleOpenChange}
      immediate
    >
      <Trigger ref={trigger} />
      <Content />
    </Menu.Root>
  )
}

export default ServerSelector
