import { NextResponse } from 'next/server'
import type { ErrorCode } from './types'

const messages = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  500: 'Internal Server Error',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
}

const descriptions = {
  400: 'The request could not be understood by the server due to malformed syntax.',
  401: 'The request requires user authentication.',
  403: 'The server understood the request, but is refusing to fulfill it.',
  404: 'The server has not found anything matching the Request-URI.',
  500: 'The server encountered an internal error and was unable to complete your request.',
  503: 'The server is not ready to handle the request.',
  504: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.',
}

export const reject = (message: string, code: ErrorCode) => {
  const statusText = messages[code]
  const details = descriptions[code]

  return NextResponse.json(
    {
      success: false,
      error: {
        message,
        details,
      },
    },
    { status: code, statusText },
  )
}
