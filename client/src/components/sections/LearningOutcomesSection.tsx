import { motion } from 'framer-motion'
import { PageContainer } from '@/components/layout/PageContainer'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { WORKSHOP_CONTENT } from '@/constants/workshop'
import { defaultTransition, slideUpVariants, staggerContainerVariants } from '@/lib/motion'
import { cn } from '@/lib/utils'

const outcomeIcons = [
  'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
  'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.431l-1.298 2.247a1.125 1.125 0 0 1-1.37.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.37-.49l-1.296-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.612.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.431l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z',
  'M3.75 13.5l10.5-3.75m0 0L3.75 6.75l10.5 3.75m-10.5 0v7.5',
  'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  'M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 0 1-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75',
  'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z',
]

const iconGradients = [
  'from-primary-500 to-primary-700 shadow-primary-500/30',
  'from-accent-500 to-accent-600 shadow-accent-500/30',
  'from-violet-500 to-purple-700 shadow-violet-500/30',
  'from-emerald-500 to-teal-600 shadow-emerald-500/30',
  'from-blue-500 to-cyan-600 shadow-blue-500/30',
  'from-amber-500 to-orange-600 shadow-amber-500/30',
]

const topAccents = [
  'from-primary-500 via-primary-400 to-accent-400',
  'from-accent-500 via-pink-400 to-primary-400',
  'from-violet-500 via-purple-400 to-indigo-400',
  'from-emerald-500 via-teal-400 to-cyan-400',
  'from-blue-500 via-sky-400 to-indigo-400',
  'from-amber-500 via-orange-400 to-rose-400',
]

export function LearningOutcomesSection() {
  const { outcomes } = WORKSHOP_CONTENT

  return (
    <section id="outcomes" className="relative overflow-hidden section-padding">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl"
        aria-hidden="true"
      />

      <PageContainer size="wide" className="relative">
        <SectionHeading
          badge="What You'll Learn"
          title={outcomes.title}
          subtitle={outcomes.subtitle}
        />

        <motion.div
          className="mt-16 lg:mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {outcomes.items.map((item, index) => (
            <motion.div key={item.title} variants={slideUpVariants}>
              <Card
                interactive
                glow
                padding="lg"
                className="group relative h-full overflow-hidden border-border/60 bg-white/80 backdrop-blur-sm hover:border-primary-200/70 hover:bg-white"
              >
                {/* Top accent bar — reveals on hover */}
                <div
                  className={cn(
                    'absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                    topAccents[index % topAccents.length],
                  )}
                  aria-hidden="true"
                />

                <div className="flex gap-4">
                  <div
                    className={cn(
                      'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-all duration-300 ease-smooth group-hover:scale-105 group-hover:shadow-xl sm:h-14 sm:w-14',
                      iconGradients[index % iconGradients.length],
                    )}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={outcomeIcons[index]} />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-xs font-bold text-primary-600 ring-1 ring-primary-100"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-heading text-[1.0625rem] font-extrabold leading-snug tracking-tight text-text sm:text-lg">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-[1.65] text-text-muted sm:text-[0.9375rem]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          <div className="glass rounded-2xl border border-border/60 px-6 py-5 text-center shadow-card sm:px-10 sm:py-6">
            <p className="text-sm font-medium text-text-muted sm:text-base">
              Ready to transform your teaching practice?
            </p>
            <a
              href="#register"
              className="group mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 transition-colors hover:text-primary-700 sm:text-base"
            >
              Register for the workshop
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  )
}
