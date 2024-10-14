import { css } from 'pandacss/css'
import { Box, Center } from 'pandacss/jsx'
import { Img } from '#components/ui'
import { is } from '#utils/helpers'
import Avvvatar from 'avvvatars-react'

import { P, match } from 'ts-pattern'

interface GuildCardAvatarProps {
  name: string
  icon?: string
  guildId: string
}

const GuidCardAvatar: React.FC<GuildCardAvatarProps> = (props) => {
  const { name, guildId, icon } = props
  return (
    <Box
      width="3rem"
      height="3rem"
      rounded="full"
      grow={0}
      shrink={0}
      position="relative"
      overflow="hidden"
      shadow="lg"
    >
      <Box
        width="full"
        height="full"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        inset={0}
        bgColor="gray.800"
        animation="pulse"
      />
      <Center
        width="full"
        height="full"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        inset={0}
      >
        {match({ icon })
          .with({ icon: P.when(is.string) }, () => (
            <Img
              width={80}
              height={80}
              src={`https://cdn.discordapp.com/icons/${guildId}/${icon}.png`}
              alt={`This image may represent an avatar from the ${name} discord server`}
              className={css({ width: 'full', height: 'full' })}
            />
          ))
          .otherwise(() => (
            <Avvvatar style="character" value={name} />
          ))}
      </Center>
    </Box>
  )
}

export default GuidCardAvatar
