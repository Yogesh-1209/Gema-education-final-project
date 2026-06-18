import { z } from 'zod'
import { AI_ROBOTICS_WORKSHOP } from '@/constants/ai-robotics-workshop'

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters'),
  email: z.email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[\d\s+()-]{7,20}$/, 'Please enter a valid phone number'),
  workshopTitle: z.string().optional(),
})

export type EnquiryFormValues = z.infer<typeof enquirySchema>

export const enquiryDefaultValues: EnquiryFormValues = {
  fullName: '',
  email: '',
  phone: '',
  workshopTitle: AI_ROBOTICS_WORKSHOP.registration.workshopTitle,
}
