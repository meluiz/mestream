import type { Provider } from '@supabase/supabase-js'
import { getSupabaseClient } from 'library/supabase/server'
import { type NextRequest, NextResponse } from 'next/server'

interface RouteParams {
  params: Promise<Record<'slug', Provider>>
}

export const GET = async (request: NextRequest, { params }: RouteParams) => {
  const provider = (await params).slug

  if (provider && ['discord'].includes(provider)) {
    const supabase = await getSupabaseClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${new URL(request.url).origin}/session/callback`,
      },
    })

    if (error) {
      throw error
    }

    return NextResponse.redirect(data.url)
  }

  return NextResponse.redirect(new URL('/', request.url))
}
