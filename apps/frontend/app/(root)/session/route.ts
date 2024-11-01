import { getSupabaseClient } from 'library/supabase/server'
import { type NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const supabase = await getSupabaseClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo: `${new URL(request.url).origin}/session/callback`,
    },
  })

  if (error) {
    throw error
  }

  return NextResponse.redirect(data.url)
}
