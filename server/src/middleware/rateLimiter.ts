import rateLimit from 'express-rate-limit'
import { env } from '../config/env.js'

export const apiRateLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: 'Too many requests, please try again later',
    status: 429,
    code: 'RATE_LIMIT_EXCEEDED',
  },
})

export const registrationRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: 'Too many registration attempts, please try again later',
    status: 429,
    code: 'RATE_LIMIT_EXCEEDED',
  },
})
