import { Link } from 'react-router-dom'
import { Alert } from '@/components/ui/Alert'
import { ROUTES } from '@/constants/routes'

export function RegistrationAuthBanner() {
  return (
    <Alert variant="info" className="mb-6">
      Have an account?{' '}
      <Link
        to={ROUTES.LOGIN}
        className="font-semibold text-primary-600 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded"
      >
        Sign in
      </Link>{' '}
      to auto-fill your details, or{' '}
      <Link
        to={ROUTES.SIGNUP}
        className="font-semibold text-primary-600 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded"
      >
        create one
      </Link>
      .
    </Alert>
  )
}
