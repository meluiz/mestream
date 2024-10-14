import { env } from 'lib/env/server'
import { discord } from 'lib/http'

import supabase from 'supabase/server'

const botId = env.BOT_USER_ID
const botToken = env.BOT_TOKEN

export const isBotMember = async (id: string) => {
  const response = await discord.get<UserGuild[]>(
    `guilds/${id}/members/${botId}`,
    {
      throwHttpErrors: false,
      headers: {
        Authorization: `Bot ${botToken}`,
      },
    },
  )

  return response.ok
}
