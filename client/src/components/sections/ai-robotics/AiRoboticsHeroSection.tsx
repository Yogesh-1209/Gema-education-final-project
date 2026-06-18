import { motion } from 'framer-motion'
import { PageContainer } from '@/components/layout/PageContainer'
import { Button } from '@/components/ui/Button'
import { AI_ROBOTICS_WORKSHOP } from '@/constants/ai-robotics-workshop'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { defaultTransition } from '@/lib/motion'

export function AiRoboticsHeroSection() {
  const { hero, title } = AI_ROBOTICS_WORKSHOP
  const reduceMotion = usePrefersReducedMotion()

  return (
    <section
      id="hero"
      className="relative overflow-hidden section-padding"
      aria-labelledby="ai-robotics-heading"
    >
      <div className="absolute inset-0 mesh-gradient noise-overlay" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl"
        aria-hidden="true"
      />

      <PageContainer size="wide" className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            className="badge-shimmer inline-flex rounded-full border border-primary-200/60 bg-white/90 px-4 py-1.5 text-xs font-semibold text-primary-700 shadow-sm backdrop-blur-md"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={defaultTransition}
          >
            {hero.badge}
          </motion.span>

          <motion.h1
            id="ai-robotics-heading"
            className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-6xl"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.08 }}
          >
            <span className="gradient-text-animated">{title}</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.16 }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="mt-9"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.24 }}
          >
            <Button
              href="#register"
              size="lg"
              shimmer
              className="bg-gradient-to-r from-violet-600 via-primary-600 to-cyan-600 shadow-glow hover:shadow-glow-lg"
            >
              {hero.cta}
            </Button>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}
