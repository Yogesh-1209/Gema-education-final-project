import { z } from 'zod'

export const workshopIdParamSchema = z.object({
  id: z.string().regex(/^[a-f\d]{24}$/i, 'Invalid workshop ID'),
})

export const registerWorkshopSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be under 100 characters'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s+()-]{7,20}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  organization: z
    .string()
    .trim()
    .max(150, 'Organization must be under 150 characters')
    .optional()
    .or(z.literal('')),
  workshopId: z.string().regex(/^[a-f\d]{24}$/i, 'Invalid workshop ID'),
})

export type RegisterWorkshopInput = z.infer<typeof registerWorkshopSchema>
