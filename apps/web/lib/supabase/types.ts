import type { SupabaseClient as $SupabaseClient } from '@supabase/supabase-js'
import type { SupabaseAuthClient as $SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
import type { JWTPayload } from 'jose'

export interface SessionPayload extends JWTPayload {
  access_token: string

  expires_in: number
  expires_at?: number

  provider_token?: string | null
  provider_refresh_token?: string | null

  token_type: string
  refresh_token: string
}

interface SupabaseAuthClient extends $SupabaseAuthClient {
  loadSession: () => Promise<void>
  createSession: (payload: SessionPayload) => Promise<void>
}

export interface SupabaseClient extends $SupabaseClient {
  auth: SupabaseAuthClient
}
