import ky from 'ky'

import { env } from 'lib/env/server'

export default ky.create({
  prefixUrl: `${env.APP_URL}/api`,
})
