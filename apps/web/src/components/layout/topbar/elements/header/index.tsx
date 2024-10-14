import React from 'react'

import { XStack } from 'pandacss/jsx'

import Mark from './elements/mark'
import ServerSelector from './elements/server-selector'
import Slash from './elements/slash'

interface HeaderProps {
  isSticky: boolean
}

const Header: React.FC<HeaderProps> = ({ isSticky }) => {
  return (
    <XStack width="full" height="2.5rem" align="center" justify="space-between">
      <XStack align="center">
        <Mark isSticky={isSticky} />
        <Slash />
        <ServerSelector />
      </XStack>
    </XStack>
  )
}

export default Header
