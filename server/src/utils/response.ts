import type { Response } from 'express'
import type { ApiSuccessResponse } from '../types/index.js'

export function sendSuccess<T>(
  res: Response,
  data: T,
  message?: string,
  statusCode = 200,
): void {
  const payload: ApiSuccessResponse<T> = { data }
  if (message) payload.message = message
  res.status(statusCode).json(payload)
}
