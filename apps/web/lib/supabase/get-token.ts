import { cookies } from 'next/headers'
import token from './token'

export default async () => {
  const cookie = cookies().get('session')
  const { provider_token } = await token.decrypt(cookie?.value)

  return provider_token || null
}
