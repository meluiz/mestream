import type React from 'react'

import { XStack, YStack } from 'pandacss/jsx'
import { Anchor, Heading } from '#components/ui'

import GuildCardAvatar from './elements/avatar'
import GuildCardStatus from './elements/status'

export interface GuildCardProps {
  ref?: React.Ref<HTMLAnchorElement>
  guildId: string
  icon?: string
  name: string
  href: string
}

const GuildCard: React.FC<GuildCardProps> = (props) => {
  const { guildId, ref, name, icon, href } = props

  return (
    <Anchor
      ref={ref}
      title={name}
      href={href}
      display="block"
      shadow="lg"
      border="1px solid"
      borderColor="gray.700/50"
      rounded="l3"
      padding="1.5rem"
      bgColor="gray.800/50"
    >
      <XStack width="full" gap="1rem">
        <GuildCardAvatar name={name} guildId={guildId} icon={icon} />
        <YStack width="full" gap="0.25rem">
          <Heading cursor="pointer" size="xl" lineClamp={1}>
            {name}
          </Heading>
          <XStack align="center">
            <GuildCardStatus type="online" value={5} aria-label="Online" />
            <GuildCardStatus type="offline" value={10} aria-label="Online" />
          </XStack>
        </YStack>
      </XStack>
    </Anchor>
  )
}

export default GuildCard
