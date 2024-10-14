import React, { startTransition } from 'react'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { HStack } from 'pandacss/jsx'
import { flex } from 'pandacss/patterns'

import { motion } from 'framer-motion'

import navigation, { type NavigationItem } from './constants/navigation'
import useLayout from './hooks/layout'

import FluidBar from './elements/fluid-bar'
import FluidTab from './elements/fluid-tab'
import Item from './elements/item'

interface NavigationProps {
  isSticky: boolean
  done: () => void
  start: () => void
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const { isSticky, start, done } = props

  const { id } = useParams<Dict>()

  const router = useRouter()
  const pathname = usePathname()

  const {
    barLayout,
    tabLayout,
    isVisible,
    onLayout,
    onHoverEnd,
    onHoverStart,
  } = useLayout()

  const renderItem = React.useCallback(
    ({ _id, href, name }: NavigationItem) => {
      const route = href.replace('[id]', id)
      const isActive = route === pathname

      return (
        <Item
          key={`topbar:navigation:${_id}`}
          label={name}
          href={route}
          isActive={isActive}
          onLayout={onLayout}
          onHoverStart={onHoverStart}
          onClick={(event) => {
            event.preventDefault()

            if (isActive) {
              return
            }

            start()
            startTransition(() => {
              router.push(route)
              done()
            })
          }}
        />
      )
    },
    [pathname],
  )

  return (
    <HStack
      width="full"
      height="2rem"
      align="center"
      justify="space-between"
      role="navigation"
      // @ts-ignore
      as="nav"
    >
      <FluidTab offset={isSticky ? 32 : 0} layout={tabLayout} />
      <motion.ul
        className={flex({ position: 'relative' })}
        onHoverEnd={onHoverEnd}
        animate={{ x: isSticky ? '2rem' : 0 }}
        transition={{ type: 'tween' }}
      >
        <FluidBar isVisible={isVisible} layout={barLayout} />
        {navigation.map(renderItem)}
      </motion.ul>
    </HStack>
  )
}

export default Navigation
