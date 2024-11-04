import React from 'react'

import { motion } from 'framer-motion'
import { Anchor } from '#components/ui'

interface Layout {
  x: number
  y: number
  width: number
  height: number
}

interface ItemProps {
  label: string
  href: string
  isActive: boolean
  onHoverEnd?: () => void
  onHoverStart?: (layout: Layout) => void
  onLayout?: (layout: Layout) => void
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const Item: React.FC<ItemProps> = (props) => {
  const { label, href, isActive, onClick, onHoverStart, onHoverEnd, onLayout } =
    props
  const element = React.useRef<HTMLLIElement>(null)

  const handleHoverStart = React.useCallback(() => {
    if (!element.current) {
      return
    }

    const { offsetWidth, offsetHeight, offsetTop, offsetLeft } = element.current

    onHoverStart?.({
      x: offsetLeft,
      y: offsetTop,
      width: offsetWidth,
      height: offsetHeight,
    })
  }, [onHoverStart])

  React.useLayoutEffect(() => {
    if (!element.current) {
      return
    }

    if (isActive) {
      const { offsetWidth, offsetHeight, offsetTop, offsetLeft } =
        element.current

      onLayout?.({
        x: offsetLeft,
        y: offsetTop,
        width: offsetWidth,
        height: offsetHeight,
      })
    }
  }, [isActive, onLayout])

  return (
    <motion.li
      ref={element}
      role="listitem"
      onHoverStart={handleHoverStart}
      onHoverEnd={onHoverEnd}
      style={{ zIndex: 5 }}
    >
      <Anchor
        href={href}
        fontSize="0.875rem"
        paddingY="0.25rem"
        paddingX="0.5rem"
        rounded="md"
        transition="all 200ms"
        color={isActive ? 'white' : 'gray.400'}
        _hover={{ color: 'gray.50' }}
        aria-label={`Go to the ${label.toLowerCase()} page`}
        onClick={onClick}
      >
        {label}
      </Anchor>
    </motion.li>
  )
}

export default Item
