import type React from 'react'

import { Box, XStack, YStack } from 'pandacss/jsx'

interface LoadingProps {
  delay?: number
}

export const Loading: React.FC<LoadingProps> = (props) => {
  const { delay = 0 } = props
  return (
    <Box
      display="block"
      rounded="l3"
      padding="1.5rem"
      border="1px solid"
      borderColor="gray.700/50"
      bgColor="gray.800/50"
      shadow="lg"
      animation="pulse"
      style={{ animationDelay: `${delay}ms` }}
      // @ts-ignore
      as="span"
    >
      <XStack gap="1rem">
        <Box
          width="3rem"
          height="3rem"
          rounded="full"
          grow={0}
          shrink={0}
          shadow="lg"
          position="relative"
          overflow="hidden"
          bgColor="gray.800"
          animation="pulse"
          animationDelay="100ms"
          style={{ animationDelay: `${delay + 100}ms` }}
          // @ts-ignore
          as="span"
        />
        <YStack width="full" gap="0.25rem">
          <Box
            width="8rem"
            height="1.75rem"
            bgColor="gray.800"
            animation="pulse"
            position="relative"
            rounded="sm"
            animationDelay="200ms"
            style={{ animationDelay: `${delay + 200}ms` }}
            // @ts-ignore
            as="span"
          />
          <Box
            width="10.5rem"
            height="1rem"
            rounded="sm"
            bgColor="gray.800"
            animation="pulse"
            position="relative"
            animationDelay="200ms"
            style={{ animationDelay: `${delay + 200}ms` }}
            // @ts-ignore
            as="span"
          />
        </YStack>
      </XStack>
    </Box>
  )
}
