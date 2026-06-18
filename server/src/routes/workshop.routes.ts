import { Router } from 'express'
import { workshopController } from '../controllers/workshop.controller.js'
import { registrationRateLimiter } from '../middleware/rateLimiter.js'
import { validate } from '../middleware/validate.js'
import { registerWorkshopSchema, workshopIdParamSchema } from '../schemas/workshop.schema.js'

const router = Router()

router.get('/', workshopController.list)
router.get('/:id', validate(workshopIdParamSchema, 'params'), workshopController.getById)
router.post(
  '/register',
  registrationRateLimiter,
  validate(registerWorkshopSchema, 'body'),
  workshopController.register,
)

export default router
