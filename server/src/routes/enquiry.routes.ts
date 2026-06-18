import { Router } from 'express'
import { enquiryController } from '../controllers/enquiry.controller.js'
import { registrationRateLimiter } from '../middleware/rateLimiter.js'
import { validate } from '../middleware/validate.js'
import { enquirySchema } from '../schemas/enquiry.schema.js'

const router = Router()

router.post(
  '/',
  registrationRateLimiter,
  validate(enquirySchema, 'body'),
  enquiryController.create,
)

export default router
