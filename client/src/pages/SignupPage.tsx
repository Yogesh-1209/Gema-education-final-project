import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { Button } from '@/components/ui/Button'
import { FormField } from '@/components/ui/FormField'
import { ROUTES } from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'
import {
  signupDefaultValues,
  signupSchema,
  type SignupFormValues,
} from '@/features/auth/schemas/auth.schema'
import { ApiRequestError } from '@/services/api'

export function SignupPage() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: signupDefaultValues,
    mode: 'onTouched',
  })

  const onSubmit = form.handleSubmit(async (values) => {
    setError(null)
    try {
      await signup(values.fullName, values.email, values.password)
      navigate(ROUTES.HOME)
    } catch (err) {
      setError(
        err instanceof ApiRequestError ? err.message : 'Signup failed. Please try again.',
      )
    }
  })

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join Gema Education to access workshops and resources"
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkTo={ROUTES.LOGIN}
    >
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {error}
          </div>
        )}
        <FormField form={form} name="fullName" label="Full name" placeholder="Jane Smith" />
        <FormField form={form} name="email" label="Email" type="email" placeholder="you@school.edu" />
        <FormField
          form={form}
          name="password"
          label="Password"
          type="password"
          placeholder="Min. 8 characters"
          hint="Use at least 8 characters"
        />
        <Button
          type="submit"
          size="lg"
          className="w-full"
          isLoading={form.formState.isSubmitting}
          disabled={form.formState.isSubmitting}
        >
          Create account
        </Button>
      </form>
    </AuthLayout>
  )
}
