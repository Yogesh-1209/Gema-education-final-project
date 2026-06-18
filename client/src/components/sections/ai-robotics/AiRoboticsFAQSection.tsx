import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageContainer } from '@/components/layout/PageContainer'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AI_ROBOTICS_WORKSHOP } from '@/constants/ai-robotics-workshop'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/utils'

export function AiRoboticsFAQSection() {
  const { faq } = AI_ROBOTICS_WORKSHOP
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const reduceMotion = usePrefersReducedMotion()

  return (
    <section id="faq" className="section-padding bg-white/80" aria-labelledby="ai-faq-heading">
      <PageContainer size="narrow">
        <SectionHeading
          badge="FAQ"
          title={faq.title}
          titleId="ai-faq-heading"
          subtitle={faq.subtitle}
        />

        <div className="mt-14 space-y-3 lg:mt-16">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `ai-faq-panel-${index}`
            const buttonId = `ai-faq-button-${index}`

            return (
              <div
                key={item.question}
                className={cn(
                  'rounded-2xl border bg-surface shadow-card transition-colors',
                  isOpen ? 'border-primary-200/80' : 'border-border/60 hover:border-primary-200/60',
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
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-transform',
                        isOpen && 'rotate-180 bg-gradient-to-br from-violet-500 to-cyan-600 text-white',
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
                      <p className="px-5 pb-5 text-sm leading-relaxed text-text-muted sm:px-6 sm:pb-6">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </PageContainer>
    </section>
  )
}
