import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { defaultTransition, slideUpVariants } from '@/lib/motion'
import { cn } from '@/lib/utils'

type SlideDirection = 'up' | 'left'

interface SlideInProps extends HTMLMotionProps<'div'> {
  direction?: SlideDirection
  delay?: number
}

const directionVariants = {
  up: slideUpVariants,
  left: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
}

export function SlideIn({
  className,
  direction = 'up',
  delay = 0,
  children,
  ...props
}: SlideInProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={directionVariants[direction]}
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
