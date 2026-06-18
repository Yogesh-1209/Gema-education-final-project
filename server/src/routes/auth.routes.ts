import { Router } from 'express'
import { authController } from '../controllers/auth.controller.js'
import { authenticate } from '../middleware/authenticate.js'
import { registrationRateLimiter } from '../middleware/rateLimiter.js'
import { validate } from '../middleware/validate.js'
import { loginUserSchema, registerUserSchema } from '../schemas/auth.schema.js'

const router = Router()

router.post(
  '/register',
  registrationRateLimiter,
  validate(registerUserSchema, 'body'),
  authController.register,
)
router.post('/login', registrationRateLimiter, validate(loginUserSchema, 'body'), authController.login)
router.get('/me', authenticate, authController.me)

export default router
