import { vercel } from '@t3-oss/env-core/presets'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  isServer: typeof window === 'undefined',
  extends: [vercel()],
  server: {
    APP_URL: z
      .string()
      .transform((url) => new URL(url).origin)
      .pipe(z.string().url()),
  },
  runtimeEnv: {
    APP_URL: process.env.APP_URL,
  },
})
