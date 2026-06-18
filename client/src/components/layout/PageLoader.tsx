import { motion } from 'framer-motion'
import { APP_CONFIG } from '@/constants/config'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function PageLoader() {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <div
      className="flex min-h-[50vh] flex-col items-center justify-center gap-4"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <motion.div
        className="relative flex h-14 w-14 items-center justify-center"
        animate={reduceMotion ? false : { rotate: 360 }}
        transition={reduceMotion ? undefined : { duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 opacity-20 blur-md" />
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-violet-600 font-heading text-sm font-bold text-white shadow-glow">
          G
        </div>
      </motion.div>
      <p className="text-sm font-medium text-text-muted">{APP_CONFIG.name}</p>
    </div>
  )
}
