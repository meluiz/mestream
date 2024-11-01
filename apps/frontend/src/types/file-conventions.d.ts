declare namespace Page {
  type Props<T = {}> = T & {
    params: Record<string, string | string[] | undefined>
    searchParams: Record<string, string | string[] | undefined>
  }

  declare interface FC<T = {}> {
    (props: Merge<T, Props>): React.ReactNode
    displayName?: string
  }
}

declare namespace Layout {
  interface Props {
    children: React.ReactNode
    params: Record<string, string | string[] | undefined>
  }

  interface FC<T = {}> {
    (props: Merge<T, Props>): React.ReactNode
    displayName?: string
  }
}

declare namespace App {
  import type { NextResponse, NextRequest } from 'next/server'

  interface Props {
    params: Record<string, string | string[] | undefined>
  }

  interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
  }

  interface Default {
    (props: Props): React.ReactNode
  }

  interface Error {
    (props: ErrorProps): React.ReactNode
  }

  interface Loading {
    (props): React.ReactNode
  }

  interface Middleware {
    (
      request: NextRequest,
    ): NextResponse<unknown> | Promise<NextResponse<unknown>>
  }

  interface NotFound {
    (props): React.ReactNode
  }

  interface Route {
    (
      request: NextRequest,
      context: Props,
    ): NextResponse<unknown> | Promise<NextResponse<unknown>>
  }

  interface Template {
    (props: Omit<Layout.Props, 'params'>): React.ReactNode
  }
}

declare namespace Metadata {
  import type { MetadataRoute } from 'next'
  import type { ImageResponse } from 'next/og'

  interface Props {
    params: Record<string, string | string[] | undefined>
  }

  interface Icon {
    (props: Props): ImageResponse
  }

  interface Image {
    (props: Props): ImageResponse
  }

  interface Sitemap {
    (): MetadataRoute.Sitemap
  }

  interface Manifest {
    (): MetadataRoute.Manifest
  }
}
