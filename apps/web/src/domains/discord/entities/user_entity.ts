export interface DiscordError {
  code: number
  message: string
}

export interface UserGuild {
  id: string
  name: string
  icon: string
  banner: null
  owner: boolean
  permissions: string
  features: string[]
  approximate_member_count?: number
  approximate_presence_count?: number
}
