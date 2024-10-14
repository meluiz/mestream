import axios, {
  type InternalAxiosRequestConfig,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios'

import supabase from 'supabase/client'
import type { HttpError, HttpResult } from '../entities'

export const createHttpAdapter = (token?: string) => {
  const http = axios.create({
    baseURL: 'https://discord.com/api/v10',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const beforeRequest = async (config: InternalAxiosRequestConfig) => {
    if (!config.headers.Authorization) {
      const { data, error } = await supabase.auth.getSession()

      if (error || !data.session) {
        return config
      }

      axios.defaults.headers.common.Authorization = `Bearer ${data.session.provider_token}`
      config.headers.Authorization = `Bearer ${data.session.provider_token}`
    }

    return config
  }

  http.interceptors.request.use(beforeRequest, beforeRequest)

  const createResolveResponse = <D = any>({
    data,
  }: AxiosResponse<D>): HttpResult<D, null> => {
    return { data, error: null }
  }

  const createRejectResponse = ({
    data: error,
  }: AxiosResponse<HttpError>): HttpResult<null, HttpError> => {
    return { error, data: null }
  }

  const request = <R = any, D = any>(
    config: AxiosRequestConfig<D>,
  ): Promise<HttpResult<R, HttpError>> => {
    return http
      .request(config)
      .then(createResolveResponse, createRejectResponse) as Promise<
      HttpResult<R, HttpError>
    >
  }

  const get = <T = any, D = any>(
    url: string,
    config: AxiosRequestConfig<D>,
  ) => {
    return request<T, D>({ ...config, method: 'get', url })
  }

  const del = <T = any, D = any>(
    url: string,
    config: AxiosRequestConfig<D>,
  ) => {
    return request<T, D>({ ...config, method: 'delete', url })
  }

  const head = <T = any, D = any>(
    url: string,
    config: AxiosRequestConfig<D>,
  ) => {
    return request<T, D>({ ...config, method: 'head', url })
  }

  const options = <T = any, D = any>(
    url: string,
    config: AxiosRequestConfig<D>,
  ) => {
    return request<T, D>({ ...config, method: 'options', url })
  }

  const post = <T = any, D = any>(
    url: string,
    data: D,
    config: AxiosRequestConfig<D>,
  ) => {
    return request<T, D>({ ...config, method: 'post', url, data })
  }

  const put = <T = any, D = any>(
    url: string,
    data: D,
    config: AxiosRequestConfig<D>,
  ) => {
    return request<T, D>({ ...config, method: 'put', url, data })
  }

  const patch = <T = any, D = any>(
    url: string,
    data: D,
    config: AxiosRequestConfig<D>,
  ) => {
    return request<T, D>({ ...config, method: 'patch', url, data })
  }

  return {
    get,
    del,
    head,
    options,
    post,
    put,
    patch,
  }
}
