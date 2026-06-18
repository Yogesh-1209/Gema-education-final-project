import type { Request, Response } from 'express'
import { env } from '../config/env.js'
import type { HealthDTO } from '../types/index.js'
import { getAllWorkshops, getWorkshopById, registerForWorkshop } from '../services/workshop.service.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { sendSuccess } from '../utils/response.js'

export const healthController = {
  check: asyncHandler((_req: Request, res: Response) => {
    const payload: HealthDTO = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: env.NODE_ENV,
    }
    sendSuccess(res, payload)
  }),
}

export const workshopController = {
  list: asyncHandler(async (_req: Request, res: Response) => {
    const workshops = await getAllWorkshops()
    sendSuccess(res, workshops)
  }),

  getById: asyncHandler(async (req: Request, res: Response) => {
    const workshop = await getWorkshopById(String(req.params.id))
    sendSuccess(res, workshop)
  }),

  register: asyncHandler(async (req: Request, res: Response) => {
    const result = await registerForWorkshop(req.body)
    sendSuccess(res, result, 'Registration created successfully', 201)
  }),
}
