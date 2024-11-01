import { getSupabaseClient } from 'library/supabase/server'
import { type NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const supabase = await getSupabaseClient()
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(new URL(next, request.url))
}
