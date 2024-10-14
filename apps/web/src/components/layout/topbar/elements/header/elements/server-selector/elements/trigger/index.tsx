import { Flex } from 'pandacss/jsx'
import { ExpandIcon } from '#components/icons'
import { Avatar, Menu, Text } from '#components/ui'

interface TriggerProps
  extends React.ComponentPropsWithRef<typeof Menu.Trigger> {}

const Trigger: React.FC<TriggerProps> = ({ ref, ...props }) => {
  return (
    <Menu.Trigger
      ref={ref}
      paddingY="0.25rem"
      paddingX="0.5rem"
      cursor="pointer"
      rounded="l2"
      transition="all 300ms cubic-bezier(0.25, 0.1, 0.25, 1)"
      bgColor="transparent"
      role="group"
      _hover={{ bgColor: 'gray.800/50' }}
      _active={{ bgColor: 'gray.800' }}
      _open={{
        bgColor: 'gray.800/50',
        '& svg': { color: 'gray.300' },
      }}
      {...props}
    >
      <Flex className="group" align="center" gap="0.5rem" color="gray.400">
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
        <ExpandIcon
          size={16}
          color="gray.600"
          transition="all 300ms cubic-bezier(0.25, 0.1, 0.25, 1)"
          _groupHover={{ color: 'gray.300' }}
        />
      </Flex>
    </Menu.Trigger>
  )
}

export default Trigger
