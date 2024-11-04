import { getSupabaseClient } from 'library/supabase/server'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const supabase = await getSupabaseClient()

  const supabaseUser = await supabase.auth.getUser()
  const supabaseSession = await supabase.auth.getSession()

  const user = supabaseUser.data.user
  const session = supabaseSession.data.session

  if (!user || !session) {
    const error = supabaseUser.error || supabaseSession.error
    return NextResponse.json({ data: null, error }, { status: 401 })
  }

  console.log(user, session)

  return NextResponse.json({
    data: { user, session },
    error: null,
  })
}
