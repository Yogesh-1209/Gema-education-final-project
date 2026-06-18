import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { PageContainer } from '@/components/layout/PageContainer'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { WORKSHOP_CONTENT } from '@/constants/workshop'
import { defaultTransition, slideUpVariants, staggerContainerVariants } from '@/lib/motion'
import { cn } from '@/lib/utils'

type DetailIcon = 'calendar' | 'clock' | 'monitor' | 'map' | 'users' | 'award'

const iconMap: Record<DetailIcon, ReactNode> = {
  calendar: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M4.5 8.25h15M4.5 19.5h15a1.5 1.5 0 0 0 1.5-1.5V8.25a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5Z" />
    </svg>
  ),
  clock: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  monitor: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>
  ),
  map: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
  users: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.209a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  ),
  award: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25s4.544.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a8.962 8.962 0 0 1-2.04-.5" />
    </svg>
  ),
}

const accentColors = [
  'from-primary-500 to-primary-700 shadow-primary-500/25',
  'from-accent-500 to-accent-600 shadow-accent-500/25',
  'from-violet-500 to-purple-700 shadow-violet-500/25',
  'from-blue-500 to-cyan-600 shadow-blue-500/25',
  'from-emerald-500 to-teal-600 shadow-emerald-500/25',
  'from-amber-500 to-orange-600 shadow-amber-500/25',
]

export function WorkshopDetailsSection() {
  const { details } = WORKSHOP_CONTENT

  return (
    <section id="details" className="relative section-padding bg-white/80 backdrop-blur-sm">
      {/* Top gradient line */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-300/60 to-transparent"
        aria-hidden="true"
      />

      <PageContainer size="wide">
        <SectionHeading
          badge="Workshop Info"
          title={details.title}
          subtitle={details.subtitle}
        />

        <div className="mt-16 lg:mt-20 grid gap-6 lg:grid-cols-12 lg:gap-7">
          {/* Highlights card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={defaultTransition}
            className="lg:col-span-5"
          >
            <div
              className="relative h-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 p-7 sm:p-8 shadow-soft-lg"
            >
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-accent-500/20 blur-2xl" aria-hidden="true" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <Badge variant="outline" className="border-white/25 bg-white/10 text-white backdrop-blur-sm">
                  What&apos;s Included
                </Badge>

                <h3 className="mt-5 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-[1.75rem]">
                  A Complete Learning Experience
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-100/90 sm:text-[0.9375rem]">
                  Join a curated workshop designed for educators who want practical, immediately applicable strategies.
                </p>

                <ul className="mt-8 space-y-3.5">
                  {details.highlights.map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-start gap-3.5 text-sm text-white/95"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...defaultTransition, delay: index * 0.07 }}
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Detail cards grid — bento layout */}
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {details.items.map((item, index) => (
              <motion.div key={item.label} variants={slideUpVariants}>
                <Card
                  interactive
                  padding="md"
                  className="group relative h-full overflow-hidden border-border/60 bg-surface hover:border-primary-200/80"
                >
                  {/* Hover gradient wash */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 opacity-0 transition-opacity duration-300 group-hover:from-primary-50/50 group-hover:to-transparent group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className={cn(
                        'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 ease-smooth group-hover:scale-110 group-hover:rotate-3',
                        accentColors[index % accentColors.length],
                      )}
                    >
                      {iconMap[item.icon as DetailIcon]}
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-text-subtle">
                        {item.label}
                      </p>
                      <p className="mt-1.5 font-heading text-lg font-extrabold tracking-tight text-text sm:text-xl">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.detail}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}
