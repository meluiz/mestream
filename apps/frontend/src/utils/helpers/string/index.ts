import { init as createCuid, createId as cuid } from '@paralleldrive/cuid2'

export const string = Object.assign(String, {
  cuid,
  createCuid,
})
