import type { NextRequest } from 'next/server'
import createMiddleware from 'supabase/middleware'

export const middleware = async (request: NextRequest) => {
  return await createMiddleware(request)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
