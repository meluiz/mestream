import { z } from 'zod'

import { vercel } from '@t3-oss/env-core/presets'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
  isServer: typeof window === 'undefined',
  extends: [vercel()],
  server: {},
  runtimeEnv: {},
})
