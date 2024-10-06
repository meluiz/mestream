import client from './client'

type Scope =
  | 'identify'
  | 'email'
  | 'connections'
  | 'guilds'
  | 'guilds.join'
  | 'guilds.members.read'
  | 'guilds.channels.read'
  | 'gdm.join'
  | 'bot'
  | 'rpc'
  | 'rpc.notifications.read'
  | 'rpc.voice.read'
  | 'rpc.voice.write'
  | 'rpc.video.read'
  | 'rpc.video.write'
  | 'rpc.screenshare.read'
  | 'rpc.screenshare.write'
  | 'rpc.activities.write'
  | 'webhook.incoming'
  | 'messages.read'
  | 'applications.builds.upload'
  | 'applications.builds.read'
  | 'applications.commands'
  | 'applications.store.update'
  | 'applications.entitlements'
  | 'activities.read'
  | 'activities.write'
  | 'relationships.read'
  | 'relationships.write'
  | 'voice'
  | 'dm_channels.read'
  | 'role_connections.write'
  | 'presences.read'
  | 'presences.write'
  | 'openid'
  | 'dm_channels.messages.read'
  | 'dm_channels.messages.write'
  | 'gateway.connect'
  | 'account.global_name.update'
  | 'payment_sources.country_code'
  | 'sdk.social_layer'
  | 'applications.commands.permissions.update'

interface SignInWithDiscordOptions {
  scopes: Scope[]
  redirectTo: string
}

export default (options: SignInWithDiscordOptions) => {
  const { redirectTo, scopes: $scopes } = options ?? {}

  const scopes = $scopes.join(' ')

  return client.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      scopes,
      redirectTo,
    },
  })
}
