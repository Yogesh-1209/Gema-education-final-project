import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { env } from './config/env.js'
import { corsErrorHandler, corsMiddleware } from './middleware/cors.js'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js'
import { apiRateLimiter } from './middleware/rateLimiter.js'
import routes from './routes/index.js'

export function createApp() {
  const app = express()

  app.disable('x-powered-by')

  app.use(helmet())
  app.use(corsMiddleware)
  app.use(corsErrorHandler)

  if (env.NODE_ENV !== 'test') {
    app.use(morgan(env.NODE_ENV === 'production' ? 'combined' : 'dev'))
  }

  app.use(express.json({ limit: '10kb' }))
  app.use(express.urlencoded({ extended: true, limit: '10kb' }))

  app.use('/api', apiRateLimiter, routes)

  app.use(notFoundHandler)
  app.use(errorHandler)

  return app
}
