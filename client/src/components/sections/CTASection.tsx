import { motion } from 'framer-motion'
import { PageContainer } from '@/components/layout/PageContainer'
import { Button } from '@/components/ui/Button'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { defaultTransition } from '@/lib/motion'

export function CTASection() {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <section className="relative py-16 sm:py-20" aria-labelledby="cta-heading">
      <PageContainer size="wide">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-600 via-primary-700 to-violet-800 px-6 py-12 text-center shadow-glow-lg sm:px-12 sm:py-16"
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={defaultTransition}
        >
          <div className="absolute inset-0 noise-overlay opacity-30" aria-hidden="true" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-400/20 blur-3xl" aria-hidden="true" />

          <div className="relative">
            <h2 id="cta-heading" className="font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Ready to elevate your teaching?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-primary-100 sm:text-lg">
              Join educators who are transforming classrooms with modern pedagogy. Limited seats available.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                href="#register"
                size="lg"
                shimmer
                className="w-full sm:w-auto bg-white text-primary-700 shadow-lg hover:bg-primary-50 hover:scale-[1.02]"
              >
                Reserve your seat
              </Button>
              <Button
                href="#faq"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Read FAQ
              </Button>
            </div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  )
}
