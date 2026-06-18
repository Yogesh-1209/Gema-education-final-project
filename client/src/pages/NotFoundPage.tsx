import { Layout } from '@/components/layout/Layout'
import { PageContainer } from '@/components/layout/PageContainer'
import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/constants/routes'

export function NotFoundPage() {
  return (
    <Layout>
      <PageContainer className="flex flex-col items-center justify-center gap-6 py-24 text-center">
        <p className="font-heading text-6xl font-extrabold text-text" aria-hidden="true">404</p>
        <h1 className="font-heading text-2xl font-bold text-text">Page not found</h1>
        <p className="max-w-md text-lg text-text-muted">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Button to={ROUTES.HOME}>Back to Home</Button>
      </PageContainer>
    </Layout>
  )
}
