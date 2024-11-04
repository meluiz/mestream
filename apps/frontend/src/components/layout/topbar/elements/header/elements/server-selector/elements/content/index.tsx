import React from 'react'

import { List, ListItem, XStack, YStack } from 'pandacss/jsx'

import { Anchor, Menu, Text } from '#components/ui'

import { useGetUserGuilds } from '#domains/discord'
import AnchorServer from './elements/anchor-server'

const Content: React.FC = () => {
  const { data } = useGetUserGuilds()

  return (
    <Menu.Positioner
      width="full"
      maxWidth="16rem"
      position="relative"
      zIndex={100}
      outline="none"
      _focus={{ outline: 'none' }}
    >
      <Menu.Content
        position="relative"
        zIndex={100}
        rounded="l2"
        shadow="lg"
        padding="0.5rem"
        bgColor="gray.800"
        animationDuration="250ms"
        animationTimingFunction="cubic-bezier(0.25, 0.1, 0.25, 1)"
        _focus={{ outline: 'none' }}
        _open={{ animationName: 'slide-in' }}
        _closed={{ animationName: 'slide-out' }}
        style={{ '--slide-size': '4px' }}
      >
        <YStack width="full" height="min-content" position="relative">
          <XStack align="center" justify="space-between" paddingX="0.5rem">
            <Text color="gray.300" fontSize="sm">
              Recent Servers
            </Text>
            <Anchor
              href={`/servers`}
              fontSize="xs"
              rounded="l1"
              paddingY="0.125rem"
              paddingX="0.5rem"
              border="1px solid"
              borderColor="gray.700"
              shadow="lg"
              _hover={{ bgColor: 'gray.700/24' }}
            >
              View All
            </Anchor>
          </XStack>
          <List>
            <AnchorServer />
            <AnchorServer />
            <AnchorServer />
            <AnchorServer />
          </List>
        </YStack>
      </Menu.Content>
    </Menu.Positioner>
  )
}

export default Content
