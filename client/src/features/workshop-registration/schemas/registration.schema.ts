import { z } from 'zod'

export const registrationSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be under 100 characters'),
  email: z.email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[\d\s+()-]{7,20}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  organization: z
    .string()
    .max(150, 'Organization must be under 150 characters')
    .optional()
    .or(z.literal('')),
  workshopId: z.string().min(1, 'Please select a workshop'),
})

export type RegistrationFormValues = z.infer<typeof registrationSchema>

export const registrationDefaultValues: RegistrationFormValues = {
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  workshopId: '',
}
