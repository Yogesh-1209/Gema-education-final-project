import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { APP_CONFIG } from '@/constants/config'
import { NAV_LINKS } from '@/constants/navigation'
import { ROUTES } from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/lib/utils'
import { PageContainer } from './PageContainer'

export function Header() {
  const { user, isAuthenticated, logout, isLoading } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 shadow-sm backdrop-blur-2xl">
      <PageContainer className="flex h-[4.25rem] items-center justify-between gap-4">
        <Link
          to={ROUTES.HOME}
          className="font-heading text-lg font-bold tracking-tight text-text transition-colors hover:text-primary-600"
        >
          {APP_CONFIG.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface-muted hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:gap-3 lg:flex">
          {isLoading ? (
            <span className="text-sm text-text-muted" aria-live="polite">Loading…</span>
          ) : isAuthenticated ? (
            <>
              <span className="max-w-[10rem] truncate text-sm font-medium text-text-muted">
                {user?.fullName}
              </span>
              <button
                type="button"
                onClick={logout}
                className="rounded-xl px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface-muted hover:text-text"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to={ROUTES.LOGIN}
                className="rounded-xl px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface-muted hover:text-text"
              >
                Login
              </Link>
              <Link
                to={ROUTES.SIGNUP}
                className="rounded-xl px-3 py-2 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50"
              >
                Sign up
              </Link>
            </>
          )}
          <a
            href="#register"
            className={cn(
              'rounded-xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-glow-sm',
              'transition-all duration-300 ease-smooth hover:bg-primary-700 hover:shadow-glow',
            )}
          >
            Register
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </PageContainer>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-[4.25rem] z-40 bg-text/20 backdrop-blur-sm lg:hidden"
            onClick={closeMobile}
            aria-hidden="true"
          />
          <nav
            id="mobile-nav"
            className="fixed inset-x-0 top-[4.25rem] z-50 border-b border-border bg-white px-4 py-4 shadow-soft-lg lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-text transition-colors hover:bg-surface-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              {isLoading ? (
                <span className="px-4 text-sm text-text-muted">Loading…</span>
              ) : isAuthenticated ? (
                <>
                  <p className="px-4 text-sm font-medium text-text-muted">{user?.fullName}</p>
                  <button
                    type="button"
                    onClick={() => { logout(); closeMobile() }}
                    className="rounded-xl px-4 py-3 text-left text-sm font-medium text-text-muted hover:bg-surface-muted"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to={ROUTES.LOGIN}
                    onClick={closeMobile}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-text hover:bg-surface-muted"
                  >
                    Login
                  </Link>
                  <Link
                    to={ROUTES.SIGNUP}
                    onClick={closeMobile}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-primary-600 hover:bg-primary-50"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
