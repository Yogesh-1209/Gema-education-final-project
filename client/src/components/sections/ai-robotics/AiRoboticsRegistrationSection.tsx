import { useState } from 'react'
import { ViewReveal } from '@/components/motion/ViewReveal'
import { Alert } from '@/components/ui/Alert'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { FormField } from '@/components/ui/FormField'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AI_ROBOTICS_WORKSHOP } from '@/constants/ai-robotics-workshop'
import { useEnquiryForm } from '@/features/enquiry/hooks/useEnquiryForm'
import { ApiRequestError } from '@/services/api'
import { PageContainer } from '@/components/layout/PageContainer'

export function AiRoboticsRegistrationSection() {
  const { registration } = AI_ROBOTICS_WORKSHOP
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const { form, onSubmit, isSubmitting } = useEnquiryForm({
    onSuccess: () => {
      setSubmitError(null)
      setIsSuccess(true)
    },
    onError: (error) => {
      setIsSuccess(false)
      setSubmitError(
        error instanceof ApiRequestError ? error.message : error.message,
      )
    },
  })

  return (
    <section id="register" className="relative section-padding mesh-gradient" aria-labelledby="ai-register-heading">
      <PageContainer size="wide">
        <SectionHeading
          badge="Enroll Today"
          title={registration.title}
          titleId="ai-register-heading"
          subtitle={registration.subtitle}
        />

        <ViewReveal className="mx-auto mt-14 max-w-xl">
          <Card padding="lg" className="gradient-border shadow-soft-lg">
            {isSuccess && (
              <Alert variant="success" title="Registration received!" className="mb-6">
                Thank you for your interest. We will contact you shortly with enrollment details.
              </Alert>
            )}

            {submitError && (
              <Alert variant="error" className="mb-6">{submitError}</Alert>
            )}

            <form onSubmit={onSubmit} className="space-y-5" noValidate aria-busy={isSubmitting}>
              <FormField form={form} name="fullName" label="Name" placeholder="Student or parent name" />
              <FormField form={form} name="email" label="Email" type="email" placeholder="you@example.com" />
              <FormField form={form} name="phone" label="Phone Number" type="tel" placeholder="+91 9800000000" />

              <Button
                type="submit"
                size="lg"
                shimmer
                className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 shadow-glow-sm"
                isLoading={isSubmitting}
                disabled={isSubmitting}
              >
                Submit Registration
              </Button>
            </form>
          </Card>
        </ViewReveal>
      </PageContainer>
    </section>
  )
}
