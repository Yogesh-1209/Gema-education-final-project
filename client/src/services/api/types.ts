export interface ApiError {
  message: string
  status: number
  code?: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
}

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface RequestOptions {
  method?: RequestMethod
  body?: unknown
  headers?: Record<string, string>
  params?: Record<string, string | number | boolean | undefined>
}
