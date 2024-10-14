import { styled } from 'pandacss/jsx'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { ClientProvider } from '#providers/layout'

import metadata from '#configs/metadata'
import viewport from '#configs/viewport'

import './globals.css'

const Layout: Layout.FC = ({ children }) => {
  return (
    <html
      lang="en-US"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
      dir="ltr"
    >
      <styled.body
        width="full"
        minHeight="min-content"
        position="relative"
        fontSize="1rem"
        fontFamily="sans"
        fontWeight="normal"
        bgColor="gray.900"
      >
        <ClientProvider>{children}</ClientProvider>
      </styled.body>
    </html>
  )
}

export default Layout

export { metadata, viewport }
