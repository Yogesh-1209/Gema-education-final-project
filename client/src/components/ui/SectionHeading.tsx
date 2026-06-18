import type { HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { defaultTransition } from '@/lib/motion'

interface SectionHeadingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onAnimationStart' | 'onAnimationEnd' | 'onDrag' | 'onDragStart' | 'onDragEnd'> {
  title: string
  subtitle?: string
  badge?: string
  titleId?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  titleId,
  align = 'center',
  className,
  ...props
}: SectionHeadingProps) {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <motion.div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'text-center items-center' : 'text-left items-start',
        className,
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={defaultTransition}
      {...props}
    >
      {badge && (
        <span
          className={cn(
            'badge-shimmer inline-flex items-center rounded-full border border-primary-200/50 bg-gradient-to-r from-primary-50 to-white px-3.5 py-1 text-xs font-semibold tracking-wide text-primary-700 shadow-sm',
            align === 'center' && 'mx-auto',
          )}
        >
          {badge}
        </span>
      )}
      <h2
        id={titleId}
        className={cn(
          'font-heading text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]',
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500',
          align === 'center' && 'mx-auto',
        )}
        aria-hidden="true"
      />
      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg sm:leading-relaxed',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
