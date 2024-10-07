interface DiscordError {
  code: number
  message: string
}

interface UserGuild {
  id: string
  name: string
  icon: string
  banner: null
  owner: boolean
  permissions: string
  features: string[]
}
