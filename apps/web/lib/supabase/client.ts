import { createClient } from '@supabase/supabase-js'
import { env } from 'lib/env/client'
import getToken from './get-token'
import { discord } from 'lib/http'

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const client = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    flowType: 'implicit',
    persistSession: true,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
})

export default client
