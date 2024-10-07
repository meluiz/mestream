import { isCuid } from '@paralleldrive/cuid2'
import boolean from './boolean'
import number from './number'
import string from './string'

export const is = {
  string,
  number,
  boolean,
  cuid: (value: string) => isCuid(value),
}
