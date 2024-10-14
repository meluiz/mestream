import jwt from 'jsonwebtoken'

import { env } from 'lib/env/server'
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  const body = await request.json()
  const token = jwt.sign(body, env.SESSION_SECRET, { expiresIn: '3d' })

  return NextResponse.json({ success: true, data: token })
}
