import { motion } from 'framer-motion'
import { PageContainer } from '@/components/layout/PageContainer'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AI_ROBOTICS_WORKSHOP } from '@/constants/ai-robotics-workshop'
import { slideUpVariants, staggerContainerVariants } from '@/lib/motion'

export function AiRoboticsOutcomesSection() {
  const { outcomes } = AI_ROBOTICS_WORKSHOP

  return (
    <section id="outcomes" className="relative section-padding mesh-gradient">
      <PageContainer size="wide">
        <SectionHeading
          badge="What They'll Learn"
          title={outcomes.title}
          subtitle={outcomes.subtitle}
        />

        <motion.ul
          className="mx-auto mt-14 max-w-3xl space-y-4 lg:mt-16"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {outcomes.items.map((item, index) => (
            <motion.li
              key={item}
              variants={slideUpVariants}
              className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-card backdrop-blur-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <span className="pt-1 text-sm leading-relaxed text-text sm:text-base">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </PageContainer>
    </section>
  )
}
