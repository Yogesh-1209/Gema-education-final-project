import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'md' | 'lg'
  interactive?: boolean
  glow?: boolean
}

const paddingStyles = {
  sm: 'p-5',
  md: 'p-6 sm:p-7',
  lg: 'p-7 sm:p-8',
}

export function Card({
  className,
  padding = 'md',
  interactive = false,
  glow = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border/70 bg-surface shadow-card',
        interactive && 'card-interactive',
        glow && 'hover:shadow-glow-sm',
        paddingStyles[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
