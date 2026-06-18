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
  loginDefaultValues,
  loginSchema,
  type LoginFormValues,
} from '@/features/auth/schemas/auth.schema'
import { ApiRequestError } from '@/services/api'

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefaultValues,
    mode: 'onTouched',
  })

  const onSubmit = form.handleSubmit(async (values) => {
    setError(null)
    try {
      await login(values.email, values.password)
      navigate(ROUTES.HOME)
    } catch (err) {
      setError(
        err instanceof ApiRequestError ? err.message : 'Login failed. Please try again.',
      )
    }
  })

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your Gema Education account"
      footerText="Don't have an account?"
      footerLinkText="Create one"
      footerLinkTo={ROUTES.SIGNUP}
    >
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {error}
          </div>
        )}
        <FormField form={form} name="email" label="Email" type="email" placeholder="you@school.edu" />
        <FormField form={form} name="password" label="Password" type="password" placeholder="••••••••" />
        <Button
          type="submit"
          size="lg"
          className="w-full"
          isLoading={form.formState.isSubmitting}
          disabled={form.formState.isSubmitting}
        >
          Sign in
        </Button>
      </form>
    </AuthLayout>
  )
}
