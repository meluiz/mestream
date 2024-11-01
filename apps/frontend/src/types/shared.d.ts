declare type Dict<T = any> = Record<string, T>
declare type Merge<T, U> = T & Omit<U, keyof T>
declare type AnyFunction<T = any> = (...args: T[]) => any

declare type Pretty<T> = { [K in keyof T]: T[K] } & {}
declare type DistributiveOmit<T, K extends keyof any> = T extends unknown
  ? Omit<T, K>
  : never

declare type DistributiveUnion<T, U> = {
  [K in keyof T]: K extends keyof U ? U[K] | T[K] : T[K]
} & DistributiveOmit<U, keyof T>

declare type ElementType<T = any> = React.ElementType<T>
