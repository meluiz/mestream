import jwt from 'jsonwebtoken'

import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.json(
      { success: false, error: 'Missing token' },
      { status: 400, statusText: 'Bad Request' },
    )
  }

  const data = jwt.decode(token)

  return NextResponse.json({ success: true, data })
}
