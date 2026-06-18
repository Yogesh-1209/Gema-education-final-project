import { Layout } from '@/components/layout/Layout'
import {
  AiRoboticsDetailsSection,
  AiRoboticsFAQSection,
  AiRoboticsHeroSection,
  AiRoboticsOutcomesSection,
  AiRoboticsRegistrationSection,
} from '@/components/sections/ai-robotics'

export function AiRoboticsWorkshopPage() {
  return (
    <Layout>
      <AiRoboticsHeroSection />
      <AiRoboticsDetailsSection />
      <AiRoboticsOutcomesSection />
      <AiRoboticsFAQSection />
      <AiRoboticsRegistrationSection />
    </Layout>
  )
}
