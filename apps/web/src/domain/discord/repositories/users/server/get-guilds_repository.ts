import {
  type UserGuildsParams,
  createUsersAdapter,
} from '../../../../../domains/discord/adapters'

const getUserGuilds = (token: string, params?: UserGuildsParams) => {
  const { getUserGuilds } = createUsersAdapter(token)
  const query = {
    with_counts: true,
    ...(params || {}),
  }

  return getUserGuilds(query)
}
