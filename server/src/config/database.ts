import mongoose from 'mongoose'
import { env } from './env.js'

export async function connectDatabase(): Promise<void> {
  try {
    await mongoose.connect(env.MONGODB_URI)
    console.info(`MongoDB connected: ${mongoose.connection.name}`)
  } catch (error) {
    console.error('MongoDB connection failed:', error)
    throw error
  }
}

export async function disconnectDatabase(): Promise<void> {
  await mongoose.disconnect()
  console.info('MongoDB disconnected')
}
