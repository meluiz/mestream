import client from './client'
import create from './create'
import verify from './verify'

import signin from './signin'
import getToken from './get-token'

const { setSession, getSession, refreshSession } = client.auth

const session = {
  create,
  verify,
  set: setSession,
  get: getSession,
  refresh: refreshSession,
}

const provider = {
  signin,
  getToken,
}

const supabase = Object.assign({}, client, {
  session,
  provider,
})

export default supabase
