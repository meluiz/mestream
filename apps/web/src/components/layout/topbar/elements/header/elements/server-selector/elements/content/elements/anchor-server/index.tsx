import { Flex, ListItem } from 'pandacss/jsx'

import { CheckIcon } from '#components/icons'
import { Anchor, Avatar, Text } from '#components/ui'

interface AnchorServer {}

const AnchorServer: React.FC<AnchorServer> = () => {
  return (
    <ListItem width="full" height="auto">
      <Anchor
        href="/servers"
        width="full"
        display="inline-flex"
        padding="0.5rem"
        rounded="l2"
        transition="all 100ms cubic-bezier(0.25, 0.1, 0.25, 1)"
        _hover={{ bgColor: 'gray.700/50' }}
      >
        <Flex
          width="full"
          align="center"
          justify="space-between"
          gap="0.5rem"
          color="gray.400"
        >
          <Flex align="center" gap="0.5rem">
            <Avatar.Root
              width="1.25rem"
              height="1.25rem"
              rounded="full"
              bgColor="gray.300"
            >
              <Avatar.Fallback
                color="gray.500"
                fontSize="0.75rem"
                fontWeight="bold"
              >
                m
              </Avatar.Fallback>
              <Avatar.Image />
            </Avatar.Root>
            <Text
              cursor="pointer"
              color="gray.100"
              fontSize=".875rem"
              fontWeight="medium"
              _groupHover={{ color: 'gray.50' }}
            >
              mescute
            </Text>
          </Flex>
          <CheckIcon
            size={16}
            color="gray.300"
            transition="all 300ms cubic-bezier(0.25, 0.1, 0.25, 1)"
            _groupHover={{ color: 'gray.300' }}
          />
        </Flex>
      </Anchor>
    </ListItem>
  )
}

export default AnchorServer
