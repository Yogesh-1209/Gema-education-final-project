import type { Request, Response } from 'express'
import type { EnquiryInput } from '../schemas/enquiry.schema.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { sendSuccess } from '../utils/response.js'

export const enquiryController = {
  create: asyncHandler(async (req: Request, res: Response) => {
    const body = req.body as EnquiryInput

    sendSuccess(
      res,
      {
        fullName: body.fullName,
        email: body.email,
        workshopId: body.workshopId,
      },
      'Enquiry submitted successfully',
      201,
    )
  }),
}
