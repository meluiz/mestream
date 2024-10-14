import { type CookieOptions, createServerClient } from '@supabase/ssr'

import { env } from 'lib/env/client'
import { cookies } from 'next/headers'

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const createSupabaseClient = () => {
  const store = cookies()

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get: (name: string) => {
        return store.get(name)?.value;
      },
      set: (name: string, value: string, options: CookieOptions) => {
        store.set({ name, value, ...options })
      },
      remove: (name: string, options: CookieOptions) => {
        store.set({ name, value: '', ...options })
      }
    }
  })
}

export default createSupabaseClient
