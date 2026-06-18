import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PageContainer } from '@/components/layout/PageContainer'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/utils'

interface AuthLayoutProps {
  title: string
  subtitle: string
  children: ReactNode
  footerText: string
  footerLinkText: string
  footerLinkTo: string
}

export function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkTo,
}: AuthLayoutProps) {
  return (
    <div className="relative min-h-svh flex flex-col overflow-hidden">
      <div className="absolute inset-0 mesh-gradient noise-overlay" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-accent-400/15 blur-3xl" aria-hidden="true" />

      <PageContainer className="relative flex flex-1 flex-col items-center justify-center py-12">
        <div className="w-full max-w-md">
          <Link
            to={ROUTES.HOME}
            className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-text-muted transition-colors hover:text-primary-600"
          >
            ← Back to home
          </Link>

          <div className="gradient-border glass-premium rounded-2xl p-7 shadow-soft-lg sm:p-8">
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-text">
              {title}
            </h1>
            <p className="mt-2 text-sm text-text-muted">{subtitle}</p>
            <div className="mt-6">{children}</div>
          </div>

          <p className="mt-6 text-center text-sm text-text-muted">
            {footerText}{' '}
            <Link
              to={footerLinkTo}
              className={cn('font-semibold text-primary-600 hover:text-primary-700')}
            >
              {footerLinkText}
            </Link>
          </p>
        </div>
      </PageContainer>
    </div>
  )
}
