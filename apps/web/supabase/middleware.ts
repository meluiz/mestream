import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'

import { env } from 'lib/env/client'

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const PROTECTED_ROUTES = ['/servers']

// https://github.com/orgs/supabase/discussions/26791#discussioncomment-10086843

export default async (request: NextRequest) => {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        get: (name: string) => {
          return request.cookies.get(name)?.value ?? ''
        },
        set: (name: string, value: string, options: CookieOptions) => {
          request.cookies.set({ name, value, ...options })

          response = NextResponse.next({
            request: { headers: request.headers },
          })

          response.cookies.set({ name, value, ...options  })
        },
        remove: (name: string, options: CookieOptions) => {
          request.cookies.set({ name, value: '', ...options });

          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })

          response.cookies.set({ name, value: '', ...options })
        }
      },
    })

    const { error } = await supabase.auth.getUser()

    if (error && PROTECTED_ROUTES.includes(request.nextUrl.pathname)) {
      const { data } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
          redirectTo: 'http://localhost:3000/session/callback',
          scopes: 'identify guilds guilds.members.read',
        },
      })

      if (data.url) {
        return NextResponse.redirect(data.url)
      }

      const url = request.nextUrl.clone()
      url.pathname = '/session/error'

      return NextResponse.redirect(url)
    }

    return response
  } catch (error) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }
}
