export type HttpResult<D = any, E = HttpError> =
  | SuccessResult<D>
  | ErrorResult<E>

interface SuccessResult<D = any> {
  data: D
  error: null
}

interface ErrorResult<E = HttpError> {
  data: null
  error: E
}

export interface HttpError {
  code: number
  message: string
}
