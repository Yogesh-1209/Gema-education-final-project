import cors from 'cors'
import { corsOrigins } from '../config/env.js'

export const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (!origin || corsOrigins.includes(origin)) {
      callback(null, true)
      return
    }
    callback(new Error(`Origin ${origin} not allowed by CORS`))
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

export const corsErrorHandler = (
  err: Error,
  _req: unknown,
  res: import('express').Response,
  next: import('express').NextFunction,
): void => {
  if (err.message.includes('CORS')) {
    res.status(403).json({
      message: 'CORS policy violation',
      status: 403,
      code: 'CORS_ERROR',
    })
    return
  }
  next(err)
}
