import { css } from 'pandacss/css'
import { Circle, XStack } from 'pandacss/jsx'
import { Text } from '#components/ui'

interface GuildCardStatusProps {
  type: 'online' | 'offline'
  value: number
}

const GuildCardStatus: React.FC<GuildCardStatusProps> = (props) => {
  const { type, value } = props

  return (
    <XStack align="center" gap="0.375rem">
      <Circle
        size="0.375rem"
        bgColor={type === 'online' ? 'green.400' : 'gray.400'}
      />
      <Text cursor="pointer" size="xs" color="gray.400">
        {`${value} ${type === 'online' ? 'onlines' : 'members'}`}
      </Text>
    </XStack>
  )
}

export default GuildCardStatus
