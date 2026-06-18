import { Layout } from '@/components/layout/Layout'
import {
  CTASection,
  FAQSection,
  HeroSection,
  LearningOutcomesSection,
  RegistrationSection,
  SpeakersSection,
  WorkshopDetailsSection,
} from '@/components/sections'

export function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <WorkshopDetailsSection />
      <LearningOutcomesSection />
      <SpeakersSection />
      <FAQSection />
      <CTASection />
      <RegistrationSection />
    </Layout>
  )
}
