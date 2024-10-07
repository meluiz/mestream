import { pathname as getPathname } from 'next-extra/pathname'
import {
  actionError as createActionError,
  createAction,
} from 'next-extra/action'

export const next = {
  getPathname,
  createAction,
  createActionError,
}
