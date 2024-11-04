import { useQuery } from '@tanstack/react-query'
import { type UserGuildsParams, createUsersAdapter } from '../../adapters'

export const useGetUserGuilds = (params?: UserGuildsParams) => {
  const { getUserGuilds } = createUsersAdapter()

  const query = {
    with_counts: true,
    ...(params || {}),
  }

  return useQuery({
    queryKey: ['users', 'guilds', query],
    queryFn: async () => {
      const { data, error } = await getUserGuilds(query)

      if (error) {
        throw error
      }

      return data
    },
  })
}
