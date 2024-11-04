import { Icon, type StyledComponent, styled } from 'pandacss/jsx'
import React from 'react'

type StyledProps = React.ComponentPropsWithRef<typeof Icon> & {
  as?: React.ElementType
}

interface IconProps extends StyledProps {
  size?: number
  color?: string
}

interface CreateIconOptions {
  viewBox?: string
  displayName?: string

  d?: string
  defaultProps?: IconProps

  path?: React.ReactElement | React.ReactElement[]
}

const createIcon = (options: CreateIconOptions) => {
  const {
    viewBox = '0 0 20 20',
    d: pathDefinition,
    displayName,
    defaultProps = {},
  } = options

  const path = React.Children.toArray(options.path)

  const Component: React.FC<IconProps> = ({ ref, ...props }) => {
    return (
      <Icon ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
        {path.length ? path : <path fill="currentColor" d={pathDefinition} />}
      </Icon>
    )
  }

  Component.displayName = displayName

  return Component
}

export default createIcon
