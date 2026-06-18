import type { Response } from 'express'
import type { AuthenticatedRequest } from '../middleware/authenticate.js'
import { getUserById, loginUser, registerUser } from '../services/auth.service.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { sendSuccess } from '../utils/response.js'

export const authController = {
  register: asyncHandler(async (req, res: Response) => {
    const result = await registerUser(req.body)
    sendSuccess(res, result, 'Account created successfully', 201)
  }),

  login: asyncHandler(async (req, res: Response) => {
    const result = await loginUser(req.body)
    sendSuccess(res, result, 'Login successful')
  }),

  me: asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const user = await getUserById(req.user!.userId)
    sendSuccess(res, user)
  }),
}
