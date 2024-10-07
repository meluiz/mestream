import { fileURLToPath } from 'node:url'
import createJiti from 'jiti'

const jiti = createJiti(fileURLToPath(import.meta.url))

jiti('./lib/env/server')
jiti('./lib/env/client')

/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: 'anonymous',
  images: {
    remotePatterns: [{ hostname: 'cdn.discordapp.com' }],
  },
  experimental: {
    // reactCompiler: true,
    staleTimes: {
      static: 60,
      dynamic: 60,
    },
    turbo: {
      resolveExtensions: [
        '.mdx',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
    },
  },
}

export default nextConfig
