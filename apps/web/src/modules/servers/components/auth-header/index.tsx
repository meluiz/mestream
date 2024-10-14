import supabase from 'supabase/server'

import { HStack, YStack } from 'pandacss/jsx'
import { Anchor, Heading, Text } from '#components/ui'

import Avatar from './elements/avatar'

export const AuthHeader = async () => {
  const { data } = await supabase.auth.getUser()

  return (
    <HStack align="center" gap={4}>
      <Avatar
        name={data.user?.user_metadata.full_name}
        src={data.user?.user_metadata.avatar_url}
      />
      <YStack flex={1} align="start">
        <Heading size="2xl">
          {data.user?.user_metadata.full_name}'s servers
        </Heading>
        <YStack gap={0}>
          <Text color="gray.400">
            Choose a server to manage from the list below.
          </Text>
          <Text color="gray.400">
            Don't see the server you want?{' '}
            <Anchor
              href="/"
              color="indigo.400"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: 'underline' }}
            >
              Invite Mestream
            </Anchor>{' '}
            to add it here.
          </Text>
        </YStack>
      </YStack>
    </HStack>
  )
}
