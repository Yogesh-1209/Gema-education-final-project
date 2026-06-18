import { APP_CONFIG } from '@/constants/config'
import { ROUTES } from '@/constants/routes'
import { Link } from 'react-router-dom'
import { PageContainer } from './PageContainer'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-white">
      <PageContainer className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-text-muted sm:flex-row">
        <p className="font-medium">&copy; {year} {APP_CONFIG.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a href="#details" className="transition-colors hover:text-text">Details</a>
          <a href="#speakers" className="transition-colors hover:text-text">Speakers</a>
          <a href="#faq" className="transition-colors hover:text-text">FAQ</a>
          <Link to={ROUTES.LOGIN} className="transition-colors hover:text-text">Login</Link>
          <a href="#register" className="font-semibold text-primary-600 transition-colors hover:text-primary-700">
            Register
          </a>
        </div>
      </PageContainer>
    </footer>
  )
}
