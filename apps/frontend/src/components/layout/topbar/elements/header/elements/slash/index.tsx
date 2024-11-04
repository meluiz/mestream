import { styled } from 'pandacss/jsx'
import { token } from 'pandacss/tokens'
import React from 'react'

const Slash: React.FC = () => {
  return (
    <svg
      width={24}
      height={24}
      strokeWidth={1.5}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      viewBox="0 0 24 24"
      style={{
        width: '1.25rem',
        height: '1.25rem',
        color: token('colors.gray.600'),
      }}
    >
      <path d="M16.88 3.549L7.12 20.451" />
    </svg>
  )
}

export default Slash
