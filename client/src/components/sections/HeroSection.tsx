import { motion } from 'framer-motion'
import { PageContainer } from '@/components/layout/PageContainer'
import { HeroScene } from '@/components/illustrations/HeroScene'
import { Button } from '@/components/ui/Button'
import { WORKSHOP_CONTENT } from '@/constants/workshop'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { defaultTransition, springTransition } from '@/lib/motion'

function SparkleIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-primary-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
    </svg>
  )
}

export function HeroSection() {
  const { hero } = WORKSHOP_CONTENT
  const reduceMotion = usePrefersReducedMotion()

  return (
    <section
      id="hero"
      className="relative overflow-hidden section-padding"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 mesh-gradient noise-overlay" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-48 right-0 h-[32rem] w-[32rem] rounded-full bg-primary-400/20 blur-3xl animate-aurora" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-48 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent-400/15 blur-3xl animate-float-slow" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl animate-pulse-soft" aria-hidden="true" />

      <PageContainer size="wide" className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 xl:gap-24">
          <div className="relative z-10 max-w-2xl lg:max-w-none">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.05 }}
            >
              <span className="badge-shimmer inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/90 px-4 py-1.5 text-xs font-semibold text-primary-700 shadow-sm backdrop-blur-md">
                <SparkleIcon />
                {hero.badge}
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="mt-7 font-heading text-[2.5rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-text sm:text-5xl lg:text-[3.75rem] xl:text-display-sm"
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.1 }}
            >
              {hero.title}
              <span className="mt-2 block gradient-text-animated">{hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-text-muted sm:text-lg sm:leading-[1.75]"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.18 }}
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.26 }}
            >
              <Button
                href="#register"
                size="lg"
                shimmer
                className="w-full sm:w-auto bg-gradient-to-r from-primary-600 via-primary-500 to-violet-600 shadow-glow hover:shadow-glow-lg hover:scale-[1.02]"
              >
                {hero.primaryCta}
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <Button href="#details" size="lg" variant="outline" className="w-full sm:w-auto glass-premium hover:border-primary-300/60">
                {hero.secondaryCta}
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.34 }}
            >
              {hero.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/50 px-4 py-4 shadow-card backdrop-blur-md sm:px-5 sm:py-5"
                  whileHover={reduceMotion ? undefined : { y: -4, transition: springTransition }}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ ...defaultTransition, delay: 0.4 + index * 0.07 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                  <p className="relative font-heading text-2xl font-extrabold tracking-tight text-text sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="relative mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-text-subtle sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="relative z-10 lg:pl-4"
          >
            <HeroScene reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}
