import { string } from '#utils/helpers'

export interface NavigationItem {
  _id: string
  name: string
  href: string
}

export default [
  {
    _id: string.cuid(),
    name: 'Overview',
    href: '/servers/[id]',
  },
  {
    _id: string.cuid(),
    name: 'Notification',
    href: '/servers/[id]/notification',
  },
  {
    _id: string.cuid(),
    name: 'Settings',
    href: '/servers/[id]/settings',
  },
  {
    _id: string.cuid(),
    name: 'Schedule',
    href: '/servers/[id]/schedule',
  },
] as NavigationItem[]
