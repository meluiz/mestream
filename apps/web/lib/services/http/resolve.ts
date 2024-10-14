import { NextResponse } from 'next/server'
import { SuccessCode } from './types'

const SUCCESS_MESSAGE = {
  200: 'OK',
  201: 'Created',
  204: 'No Content',
}

export const resolve = <D = any>(data: D, status: SuccessCode) => {
  const statusText = SUCCESS_MESSAGE[status]
  return NextResponse.json({ success: false, data }, { status, statusText })
}
