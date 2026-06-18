import { Enquiry } from '../models/Enquiry.js'
import type { EnquiryInput } from '../schemas/enquiry.schema.js'

const DEFAULT_WORKSHOP_TITLE = 'AI & Robotics Summer Workshop'

export async function createEnquiry(input: EnquiryInput) {
  const enquiry = await Enquiry.create({
    fullName: input.fullName,
    email: input.email,
    phone: input.phone,
    workshopTitle: input.workshopTitle ?? DEFAULT_WORKSHOP_TITLE,
    ...(input.workshopId && { workshopId: input.workshopId }),
  })

  return {
    id: enquiry._id.toString(),
    fullName: enquiry.fullName,
    email: enquiry.email,
    workshopTitle: enquiry.workshopTitle,
  }
}
