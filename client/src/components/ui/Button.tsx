import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { Spinner } from '@/components/ui/Spinner'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type BaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  shimmer?: boolean
  className?: string
  children?: React.ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; to?: undefined }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined }

type ButtonAsRouterLink = BaseProps &
  Omit<LinkProps, 'to'> & { to: string; href?: undefined }

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white shadow-glow-sm hover:bg-primary-700 hover:shadow-glow active:scale-[0.98]',
  secondary:
    'bg-primary-50 text-primary-700 hover:bg-primary-100 active:scale-[0.98]',
  outline:
    'border border-border bg-surface text-text shadow-sm hover:border-primary-200 hover:bg-surface-muted active:scale-[0.98]',
  ghost:
    'text-text-muted hover:bg-surface-muted hover:text-text active:scale-[0.98]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-[0.9375rem] font-semibold',
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    isLoading = false,
    shimmer = false,
    className,
    children,
    ...rest
  } = props

  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-xl font-medium',
    'transition-all duration-300 ease-smooth',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    shimmer && 'btn-shimmer',
    variantStyles[variant],
    sizeStyles[size],
    className,
  )

  const content = isLoading ? (
    <>
      <Spinner size="sm" className="border-white/30 border-t-white" />
      <span className="sr-only">Loading</span>
    </>
  ) : (
    children
  )

  if ('to' in props && props.to) {
    const { to, ...linkRest } = rest as Omit<LinkProps, 'to'> & { to: string }
    return (
      <Link to={to} className={classes} aria-busy={isLoading || undefined} {...linkRest}>
        {content}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
    return (
      <a href={href} className={classes} aria-busy={isLoading || undefined} {...anchorRest}>
        {content}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button
      type={buttonRest.type ?? 'button'}
      className={classes}
      disabled={buttonRest.disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...buttonRest}
    >
      {content}
    </button>
  )
}
