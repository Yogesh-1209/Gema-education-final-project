import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ApiRequestError } from '@/services/api'
import { workshopService } from '@/services/workshop/workshop.service'
import type { WorkshopRegistrationPayload } from '@/services/workshop/types'
import {
  registrationDefaultValues,
  registrationSchema,
  type RegistrationFormValues,
} from '../schemas/registration.schema'

interface UseRegistrationFormOptions {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export function useRegistrationForm(options: UseRegistrationFormOptions = {}) {
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: registrationDefaultValues,
    mode: 'onTouched',
  })

  const onSubmit = form.handleSubmit(async (values) => {
    const payload: WorkshopRegistrationPayload = {
      fullName: values.fullName,
      email: values.email,
      workshopId: values.workshopId,
      phone: values.phone || undefined,
      organization: values.organization || undefined,
    }

    try {
      await workshopService.register(payload)
      form.reset(registrationDefaultValues)
      options.onSuccess?.()
    } catch (error) {
      options.onError?.(
        error instanceof ApiRequestError
          ? error
          : error instanceof Error
            ? error
            : new Error('Registration failed'),
      )
    }
  })

  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
  }
}
