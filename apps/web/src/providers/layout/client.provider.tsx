'use client'

import React from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

import client from '#configs/query'

export const ClientProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <QueryClientProvider client={client}>
      <Toaster />
      {children}
    </QueryClientProvider>
  )
}
