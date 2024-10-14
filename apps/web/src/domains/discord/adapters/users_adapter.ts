import type { UserGuild } from '../entities'
import { createHttpAdapter } from './http_adapter'

export interface UserGuildsParams {
  before?: string
  after?: string
  limit?: number
  with_counts?: boolean
}

export const createUsersAdapter = (token?: string) => {
  const http = createHttpAdapter(token)

  const getUserGuilds = (params?: UserGuildsParams) => {
    return http.get<UserGuild[]>('https://discord.com/api/users/@me/guilds', {
      params: {
        ...params,
        with_counts: true,
      },
    })
  }

  return {
    getUserGuilds,
  }
}
