import { z } from 'zod'

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be under 100 characters'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s+()-]{7,20}$/, 'Please enter a valid phone number'),
  workshopTitle: z
    .string()
    .trim()
    .min(1, 'Workshop title is required')
    .max(200)
    .optional(),
  workshopId: z
    .string()
    .regex(/^[a-f\d]{24}$/i, 'Invalid workshop ID')
    .optional(),
})

export type EnquiryInput = z.infer<typeof enquirySchema>
