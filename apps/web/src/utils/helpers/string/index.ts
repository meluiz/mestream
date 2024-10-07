import { createId as cuid, init as createCuid } from '@paralleldrive/cuid2'

export const string = Object.assign(String, {
  cuid,
  createCuid,
})
