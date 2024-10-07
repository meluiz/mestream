import { isCuid } from '@paralleldrive/cuid2'
import string from './string'
import number from './number'
import boolean from './boolean'

export const is = {
  string,
  number,
  boolean,
  cuid: (value: string) => isCuid(value),
}
