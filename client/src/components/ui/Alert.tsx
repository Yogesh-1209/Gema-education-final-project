import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type AlertVariant = 'success' | 'error' | 'info'

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant: AlertVariant
  title?: string
  children: ReactNode
}

const variantStyles: Record<AlertVariant, string> = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  error: 'border-red-200 bg-red-50 text-red-700',
  info: 'border-primary-100 bg-primary-50/50 text-text-muted',
}

const titleStyles: Record<AlertVariant, string> = {
  success: 'text-emerald-800',
  error: 'text-red-700',
  info: 'text-text',
}

const livePoliteness: Record<AlertVariant, 'polite' | 'assertive' | undefined> = {
  success: 'polite',
  error: 'assertive',
  info: undefined,
}

export function Alert({
  variant,
  title,
  children,
  className,
  ...props
}: AlertProps) {
  const role = variant === 'error' ? 'alert' : 'status'
  const ariaLive = livePoliteness[variant]

  return (
    <div
      role={role}
      aria-live={ariaLive}
      className={cn(
        'rounded-xl border px-4 py-3 text-sm',
        variant === 'success' && title && 'py-4',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {title ? (
        <>
          <p className={cn('font-semibold', titleStyles[variant])}>{title}</p>
          <div className={cn('mt-1', variant === 'success' && 'text-emerald-700')}>{children}</div>
        </>
      ) : (
        children
      )}
    </div>
  )
}
