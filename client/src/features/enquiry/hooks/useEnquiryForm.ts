import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ApiRequestError } from '@/services/api'
import { enquiryService } from '@/services/enquiry/enquiry.service'
import {
  enquiryDefaultValues,
  enquirySchema,
  type EnquiryFormValues,
} from '../schemas/enquiry.schema'

interface UseEnquiryFormOptions {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export function useEnquiryForm(options: UseEnquiryFormOptions = {}) {
  const form = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: enquiryDefaultValues,
    mode: 'onTouched',
  })

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await enquiryService.submit({
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        workshopTitle: values.workshopTitle,
      })
      form.reset(enquiryDefaultValues)
      options.onSuccess?.()
    } catch (error) {
      options.onError?.(
        error instanceof ApiRequestError
          ? error
          : error instanceof Error
            ? error
            : new Error('Failed to submit enquiry'),
      )
    }
  })

  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
  }
}
