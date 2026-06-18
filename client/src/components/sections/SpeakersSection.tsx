import { motion } from 'framer-motion'
import { PageContainer } from '@/components/layout/PageContainer'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { WORKSHOP_CONTENT } from '@/constants/workshop'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { slideUpVariants, staggerContainerVariants } from '@/lib/motion'
import { cn } from '@/lib/utils'

const speakerGradients = [
  'from-primary-500 via-primary-600 to-violet-600 shadow-primary-500/30',
  'from-accent-500 via-pink-500 to-rose-600 shadow-accent-500/30',
  'from-violet-500 via-purple-600 to-indigo-700 shadow-violet-500/30',
]

export function SpeakersSection() {
  const { speakers } = WORKSHOP_CONTENT
  const reduceMotion = usePrefersReducedMotion()

  return (
    <section id="speakers" className="relative section-padding" aria-labelledby="speakers-heading">
      <div className="absolute inset-0 mesh-gradient" aria-hidden="true" />

      <PageContainer size="wide" className="relative">
        <SectionHeading
          badge="Expert Faculty"
          title={speakers.title}
          titleId="speakers-heading"
          subtitle={speakers.subtitle}
        />

        <motion.ul
          className="mt-16 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:mt-20"
          variants={staggerContainerVariants}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-80px' }}
        >
          {speakers.items.map((speaker, index) => (
            <motion.li key={speaker.name} variants={slideUpVariants} className="list-none">
              <Card
                interactive
                glow
                padding="lg"
                className="group relative h-full overflow-hidden border-border/60 bg-white/80 backdrop-blur-sm hover:border-primary-200/80"
              >
                <div
                  className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary-50/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div
                  className={cn(
                    'relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br font-heading text-lg font-bold text-white shadow-lg transition-transform duration-500 ease-smooth group-hover:scale-105 group-hover:rotate-2',
                    speakerGradients[index % speakerGradients.length],
                  )}
                  aria-hidden="true"
                >
                  {speaker.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <h3 className="relative mt-5 font-heading text-lg font-extrabold tracking-tight text-text">
                  {speaker.name}
                </h3>
                <p className="relative mt-1 text-sm font-medium text-primary-600">{speaker.role}</p>
                <span
                  className={cn(
                    'relative mt-3 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 ring-1 ring-primary-100 transition-colors group-hover:bg-primary-100',
                  )}
                >
                  {speaker.expertise}
                </span>
                <p className="relative mt-4 text-sm leading-relaxed text-text-muted">{speaker.bio}</p>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </PageContainer>
    </section>
  )
}
