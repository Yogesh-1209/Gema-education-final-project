import type { BaseSyntheticEvent } from 'react'
import { Controller, type UseFormReturn } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { FormField } from '@/components/ui/FormField'
import { Select, type SelectOption } from '@/components/ui/Select'
import type { RegistrationFormValues } from '@/features/workshop-registration/schemas/registration.schema'
import { getFieldErrorMessage } from '@/lib/form'

interface RegistrationFormProps {
  form: UseFormReturn<RegistrationFormValues>
  workshopOptions: SelectOption[]
  hasWorkshops: boolean
  isSubmitting: boolean
  isFormDisabled: boolean
  onSubmit: (event?: BaseSyntheticEvent) => Promise<void>
}

export function RegistrationForm({
  form,
  workshopOptions,
  hasWorkshops,
  isSubmitting,
  isFormDisabled,
  onSubmit,
}: RegistrationFormProps) {
  const workshopError = getFieldErrorMessage(form.formState.errors, 'workshopId')

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate aria-busy={isSubmitting}>
      <FormField form={form} name="fullName" label="Full name" placeholder="Jane Smith" />
      <FormField form={form} name="email" label="Email" type="email" placeholder="you@school.edu" />
      <FormField form={form} name="phone" label="Phone (optional)" type="tel" placeholder="+977 9800000000" />
      <FormField
        form={form}
        name="organization"
        label="Organization (optional)"
        placeholder="Your school or institution"
      />

      <Controller
        control={form.control}
        name="workshopId"
        render={({ field }) => (
          <Select
            label="Workshop"
            options={workshopOptions}
            placeholder={hasWorkshops ? 'Select a workshop' : 'No workshops available'}
            error={workshopError}
            disabled={!hasWorkshops}
            {...field}
          />
        )}
      />

      <Button
        type="submit"
        size="lg"
        shimmer
        className="w-full bg-gradient-to-r from-primary-600 to-primary-500 shadow-glow-sm"
        isLoading={isSubmitting}
        disabled={isFormDisabled}
      >
        Complete Registration
      </Button>
    </form>
  )
}
