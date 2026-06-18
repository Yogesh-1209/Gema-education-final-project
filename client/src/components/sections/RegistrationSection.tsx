import { PageContainer } from '@/components/layout/PageContainer'
import { ViewReveal } from '@/components/motion/ViewReveal'
import { Alert } from '@/components/ui/Alert'
import { Card } from '@/components/ui/Card'
import { FormSkeleton } from '@/components/ui/Skeleton'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RegistrationAuthBanner } from '@/features/workshop-registration/components/RegistrationAuthBanner'
import { RegistrationForm } from '@/features/workshop-registration/components/RegistrationForm'
import { useRegistrationSection } from '@/features/workshop-registration/hooks/useRegistrationSection'

const SECTION_COPY = {
  badge: 'Secure Your Seat',
  title: 'Register for the Workshop',
  subtitle: 'Complete the form below to reserve your place. Limited seats available.',
  successTitle: 'Registration confirmed!',
  successBody: "We'll send a confirmation email with workshop details shortly.",
} as const

function SectionTopBorder() {
  return (
    <div
      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-300/60 to-transparent"
      aria-hidden="true"
    />
  )
}

export function RegistrationSection() {
  const {
    form,
    onSubmit,
    isSubmitting,
    isLoadingWorkshops,
    workshopsError,
    submitError,
    isSuccess,
    workshopOptions,
    hasWorkshops,
    isFormDisabled,
    showAuthPrompt,
  } = useRegistrationSection()

  return (
    <section
      id="register"
      className="relative section-padding mesh-gradient"
      aria-labelledby="register-heading"
    >
      <SectionTopBorder />

      <PageContainer size="wide">
        <SectionHeading
          badge={SECTION_COPY.badge}
          title={SECTION_COPY.title}
          titleId="register-heading"
          subtitle={SECTION_COPY.subtitle}
        />

        <ViewReveal className="mx-auto mt-14 max-w-2xl">
          <Card padding="lg" className="gradient-border shadow-soft-lg">
            {showAuthPrompt && <RegistrationAuthBanner />}

            {isSuccess && (
              <Alert variant="success" title={SECTION_COPY.successTitle} className="mb-6">
                {SECTION_COPY.successBody}
              </Alert>
            )}

            {workshopsError && (
              <Alert variant="error" className="mb-6">{workshopsError}</Alert>
            )}

            {submitError && (
              <Alert variant="error" className="mb-6">{submitError}</Alert>
            )}

            {isLoadingWorkshops ? (
              <FormSkeleton />
            ) : (
              <RegistrationForm
                form={form}
                workshopOptions={workshopOptions}
                hasWorkshops={hasWorkshops}
                isSubmitting={isSubmitting}
                isFormDisabled={isFormDisabled}
                onSubmit={onSubmit}
              />
            )}
          </Card>
        </ViewReveal>
      </PageContainer>
    </section>
  )
}
