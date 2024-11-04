'use client'
import React from 'react'

import { Box, Container, XStack, YStack } from 'pandacss/jsx'

import { useProgress } from '#hooks/misc'

import Mark from './elements/mark'
import Navigation from './elements/navigation'
import ProgressBar from './elements/progress-bar'

import { useWindowScroll } from 'react-use'
import Header from './elements/header'

export const Topbar = () => {
  const { state, value, start, done, reset } = useProgress()
  const { y } = useWindowScroll()

  const isSticky = React.useMemo(() => y >= 50, [y])

  return (
    <Box
      width="full"
      position="sticky"
      borderColor="gray.800"
      borderBottom="1px solid"
      bgColor="gray.900"
      top="-3.125rem"
      left={0}
      zIndex={50}
    >
      <Box
        widows="full"
        height="min-content"
        position="relative"
        bgColor="gray.950/32"
      >
        <Container>
          <YStack>
            <Header isSticky={isSticky} />
            <Navigation isSticky={isSticky} start={start} done={done} />
          </YStack>
        </Container>
        <ProgressBar state={state} progress={value} onExitComplete={reset} />
      </Box>
    </Box>
  )
}
