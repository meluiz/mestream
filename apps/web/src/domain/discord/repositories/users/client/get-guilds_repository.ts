import { useQuery } from '@tanstack/react-query'
import {
  type UserGuildsParams,
  createUsersAdapter,
} from '../../../../../domains/discord/adapters'

const useGetUserGuilds = (token: string, params?: UserGuildsParams) => {
  const { getUserGuilds } = createUsersAdapter(token)

  const query = {
    with_counts: true,
    ...(params || {}),
  }

  return useQuery({
    queryKey: ['users', 'guilds', query],
    queryFn: async () => {
      return getUserGuilds(query)
    },
  })
}
