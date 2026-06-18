import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageContainer } from '@/components/layout/PageContainer'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { WORKSHOP_CONTENT } from '@/constants/workshop'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { defaultTransition } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function FAQSection() {
  const { faq } = WORKSHOP_CONTENT
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reduceMotion = usePrefersReducedMotion()

  return (
    <section id="faq" className="relative section-padding bg-white/80 backdrop-blur-sm" aria-labelledby="faq-heading">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-300/60 to-transparent"
        aria-hidden="true"
      />

      <PageContainer size="narrow">
        <SectionHeading badge="FAQ" title={faq.title} titleId="faq-heading" subtitle={faq.subtitle} />

        <motion.div
          className="mt-14 space-y-3 lg:mt-16"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={defaultTransition}
        >
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div
                key={item.question}
                className={cn(
                  'rounded-2xl border bg-surface shadow-card transition-all duration-300',
                  isOpen
                    ? 'border-primary-200/80 shadow-glow-sm bg-gradient-to-br from-white to-primary-50/30'
                    : 'border-border/60 hover:border-primary-200/60 hover:shadow-card-hover',
                )}
              >
                <h3 className="m-0">
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="font-heading text-sm font-bold text-text sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-primary-600 transition-all duration-300',
                        isOpen
                          ? 'rotate-180 bg-gradient-to-br from-primary-500 to-violet-600 text-white shadow-glow-sm'
                          : 'bg-primary-50',
                      )}
                      aria-hidden="true"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={reduceMotion ? undefined : { height: 'auto', opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-text-muted sm:px-6 sm:pb-6 sm:text-[0.9375rem]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </PageContainer>
    </section>
  )
}
