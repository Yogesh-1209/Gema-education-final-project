import type { NextFunction, Request, Response } from 'express'
import { ApiError } from '../utils/ApiError.js'
import { verifyToken } from '../utils/jwt.js'

export interface AuthenticatedRequest extends Request {
  user?: { userId: string; email: string }
}

export function authenticate(req: AuthenticatedRequest, _res: Response, next: NextFunction): void {
  const header = req.headers.authorization

  if (!header?.startsWith('Bearer ')) {
    next(new ApiError(401, 'Authentication required', 'UNAUTHORIZED'))
    return
  }

  const token = header.slice(7)

  try {
    const payload = verifyToken(token)
    req.user = { userId: payload.userId, email: payload.email }
    next()
  } catch {
    next(new ApiError(401, 'Invalid or expired token', 'UNAUTHORIZED'))
  }
}
