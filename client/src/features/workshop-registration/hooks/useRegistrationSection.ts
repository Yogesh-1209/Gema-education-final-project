import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import type { SelectOption } from '@/components/ui/Select'
import { useRegistrationForm } from './useRegistrationForm'
import { useWorkshops } from './useWorkshops'

function toErrorMessage(error: Error): string {
  return error.message || 'Registration failed. Please try again.'
}

export function useRegistrationSection() {
  const { user, isAuthenticated } = useAuth()
  const { workshops, isLoading: isLoadingWorkshops, error: workshopsError, hasWorkshops } =
    useWorkshops()

  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const { form, onSubmit, isSubmitting } = useRegistrationForm({
    onSuccess: () => {
      setSubmitError(null)
      setIsSuccess(true)
    },
    onError: (error) => {
      setIsSuccess(false)
      setSubmitError(toErrorMessage(error))
    },
  })

  const { setValue } = form

  useEffect(() => {
    if (workshops.length !== 1) return
    setValue('workshopId', workshops[0].id)
  }, [workshops, setValue])

  useEffect(() => {
    if (!user) return
    setValue('fullName', user.fullName)
    setValue('email', user.email)
  }, [user, setValue])

  const workshopOptions = useMemo<SelectOption[]>(
    () =>
      workshops.map((workshop) => ({
        value: workshop.id,
        label: `${workshop.title} — ${workshop.date}`,
      })),
    [workshops],
  )

  const isFormDisabled = isSubmitting || isLoadingWorkshops || !hasWorkshops

  return {
    form,
    onSubmit,
    isSubmitting,
    isLoadingWorkshops,
    workshopsError,
    submitError,
    isSuccess,
    isAuthenticated,
    workshopOptions,
    hasWorkshops,
    isFormDisabled,
    showAuthPrompt: !isAuthenticated && !isLoadingWorkshops,
  }
}
