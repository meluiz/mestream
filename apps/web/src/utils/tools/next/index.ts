import {
  createAction,
  actionError as createActionError,
} from 'next-extra/action'
import { pathname as getPathname } from 'next-extra/pathname'

export const next = {
  getPathname,
  createAction,
  createActionError,
}
