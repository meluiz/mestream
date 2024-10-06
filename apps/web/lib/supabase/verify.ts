import 'server-only'

import type { Session, User } from '@supabase/supabase-js'

import { cache } from 'react'
import { cookies } from 'next/headers'

import token from './token'
import client from './client'

type Unauthorized = {
  user: null
  session: null
  authorized: false
}

type Authorized = {
  user: User
  session: Session
  authorized: true
}

export default cache(async () => {
  const cookie = cookies().get('session')
  const payload = await token.decrypt(cookie?.value)

  const { data, error } = await client.auth.setSession(payload)

  if (error) {
    return {
      user: null,
      session: null,
      authorized: false,
    } as Unauthorized
  }

  return { authorized: true, ...data } as Authorized
})
