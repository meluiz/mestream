import { createBrowserClient } from '@supabase/ssr'
import { env } from 'lib/env/client'

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)

export default supabase
