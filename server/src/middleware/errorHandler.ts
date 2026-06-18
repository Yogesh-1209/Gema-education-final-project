import type { NextFunction, Request, Response } from 'express'
import { ApiError } from '../utils/ApiError.js'
import { env } from '../config/env.js'

export function notFoundHandler(req: Request, _res: Response, next: NextFunction): void {
  next(new ApiError(404, `Route ${req.method} ${req.originalUrl} not found`, 'NOT_FOUND'))
}

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      message: err.message,
      status: err.statusCode,
      code: err.code,
      ...(err.details !== undefined && { details: err.details }),
    })
    return
  }

  if (err instanceof Error && err.name === 'CastError') {
    res.status(400).json({
      message: 'Invalid ID format',
      status: 400,
      code: 'INVALID_ID',
    })
    return
  }

  if (err instanceof Error && err.name === 'ValidationError') {
    res.status(400).json({
      message: err.message,
      status: 400,
      code: 'VALIDATION_ERROR',
    })
    return
  }

  console.error('Unhandled error:', err)

  const message =
    env.NODE_ENV === 'production' ? 'Internal server error' : (err as Error)?.message ?? 'Internal server error'

  res.status(500).json({
    message,
    status: 500,
    code: 'INTERNAL_SERVER_ERROR',
  })
}
