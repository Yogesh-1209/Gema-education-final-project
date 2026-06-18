import { cn } from '@/lib/utils'

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className={cn(
        'fixed left-4 top-4 z-[100] -translate-y-20 rounded-xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-lg',
        'transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
      )}
    >
      Skip to main content
    </a>
  )
}
