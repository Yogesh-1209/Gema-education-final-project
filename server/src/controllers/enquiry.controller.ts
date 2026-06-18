import type { Request, Response } from 'express'
import type { EnquiryInput } from '../schemas/enquiry.schema.js'
import { createEnquiry } from '../services/enquiry.service.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { sendSuccess } from '../utils/response.js'

export const enquiryController = {
  create: asyncHandler(async (req: Request, res: Response) => {
    const result = await createEnquiry(req.body as EnquiryInput)
    sendSuccess(res, result, 'Enquiry submitted successfully', 201)
  }),
}
