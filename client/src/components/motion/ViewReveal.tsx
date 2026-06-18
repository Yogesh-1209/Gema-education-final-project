import type { ReactNode } from 'react'
import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { defaultTransition } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface ViewRevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: ReactNode
  y?: number
}

export function ViewReveal({
  className,
  children,
  y = 32,
  viewport = { once: true, margin: '-80px' },
  transition = defaultTransition,
  ...props
}: ViewRevealProps) {
  const reduceMotion = usePrefersReducedMotion()

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  )
}
