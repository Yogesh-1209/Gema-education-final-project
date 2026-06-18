import { Router } from 'express'
import authRoutes from './auth.routes.js'
import enquiryRoutes from './enquiry.routes.js'
import healthRoutes from './health.routes.js'
import workshopRoutes from './workshop.routes.js'

const router = Router()

router.use('/health', healthRoutes)
router.use('/auth', authRoutes)
router.use('/enquiry', enquiryRoutes)
router.use('/workshops', workshopRoutes)

export default router
