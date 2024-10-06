import { type JWTPayload, jwtVerify, SignJWT } from 'jose'
import { env } from 'lib/env/server'

export interface SessionPayload extends JWTPayload {
  access_token: string

  expires_in: number
  expires_at?: number

  provider_token?: string | null
  provider_refresh_token?: string | null

  token_type: string
  refresh_token: string
}

const secret = env.SESSION_SECRET
const encoded = new TextEncoder().encode(secret)

const encrypt = async (payload: SessionPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encoded)
}

const decrypt = async (
  session: string | undefined = '',
): Promise<SessionPayload> => {
  try {
    const { payload } = await jwtVerify(session, encoded, {
      algorithms: ['HS256'],
    })

    return payload as SessionPayload
  } catch (error) {
    return {
      access_token: '',
      expires_in: 0,
      expires_at: 0,
      provider_token: null,
      provider_refresh_token: null,
      token_type: '',
      refresh_token: '',
    }
  }
}

export default {
  encrypt,
  decrypt,
}
