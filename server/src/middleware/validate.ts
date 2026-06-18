import type { NextFunction, Request, Response } from 'express'
import type { ZodSchema } from 'zod'
import { ValidationError } from '../utils/ApiError.js'

type RequestSource = 'body' | 'query' | 'params'

export function validate<T>(schema: ZodSchema<T>, source: RequestSource = 'body') {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[source])

    if (!result.success) {
      const details = result.error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      }))
      next(new ValidationError('Validation failed', details))
      return
    }

    req[source] = result.data as typeof req[typeof source]
    next()
  }
}
