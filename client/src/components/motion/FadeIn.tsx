import type { ReactNode } from 'react'
import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { defaultTransition, fadeInVariants } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface FadeInProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  delay?: number
  children?: ReactNode
}

export function FadeIn({ className, delay = 0, children, ...props }: FadeInProps) {
  const reduceMotion = usePrefersReducedMotion()

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ ...defaultTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
