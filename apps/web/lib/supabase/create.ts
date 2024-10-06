import { cookies } from 'next/headers'

import { DateTime } from 'luxon'

import type { SessionPayload } from './types'

import client from './client'
import token from './token'

export default async (payload: SessionPayload) => {
  const { data, error } = await client.auth.setSession(payload)

  if (data.session) {
    const { user, ...rest } = data.session
    const session = await token.encrypt({
      ...payload,
      provider_token: payload?.provider_token,
      provider_refresh_token: payload?.provider_refresh_token,
    })

    const expires = DateTime.now().plus({ seconds: rest.expires_in }).toJSDate()

    cookies().set('session', session, {
      expires,
      path: '/',
      secure: true,
      httpOnly: true,
      sameSite: 'lax',
    })
  }

  return { data, error }
}
