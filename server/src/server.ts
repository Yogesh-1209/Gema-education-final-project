import 'dotenv/config'
import { createApp } from './app.js'
import { connectDatabase } from './config/database.js'
import { env } from './config/env.js'

async function startServer() {
  await connectDatabase()

  const app = createApp()

  const server = app.listen(env.PORT, () => {
    console.info(`Server running on http://localhost:${env.PORT}`)
    console.info(`Environment: ${env.NODE_ENV}`)
    console.info(`API base: http://localhost:${env.PORT}/api`)
  })

  const shutdown = async (signal: string) => {
    console.info(`${signal} received — shutting down gracefully`)
    server.close(async () => {
      const { disconnectDatabase } = await import('./config/database.js')
      await disconnectDatabase()
      process.exit(0)
    })
  }

  process.on('SIGTERM', () => shutdown('SIGTERM'))
  process.on('SIGINT', () => shutdown('SIGINT'))
}

startServer().catch((error) => {
  console.error('Failed to start server:', error)
  process.exit(1)
})
