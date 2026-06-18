export const AI_ROBOTICS_WORKSHOP = {
  slug: 'ai-robotics-summer',
  title: 'AI & Robotics Summer Workshop',
  hero: {
    badge: 'Summer 2026 · Ages 8–14',
    description:
      'A fun, project-based online program where young learners explore artificial intelligence, build robots, and develop coding skills through guided hands-on activities.',
    cta: 'Enroll Now',
  },
  details: {
    title: 'Workshop Details',
    subtitle: 'Everything you need to know before enrolling your child.',
    items: [
      { label: 'Age Group', value: '8–14 Years', icon: 'users' as const },
      { label: 'Duration', value: '4 Weeks', icon: 'clock' as const },
      { label: 'Mode', value: 'Online', icon: 'monitor' as const },
      { label: 'Fee', value: '₹2,999', icon: 'fee' as const },
      { label: 'Start Date', value: '15 July 2026', icon: 'calendar' as const },
    ],
  },
  outcomes: {
    title: 'Learning Outcomes',
    subtitle: 'By the end of this workshop, students will be able to:',
    items: [
      'Understand basic AI concepts and how machines learn from data',
      'Build and program simple robots using beginner-friendly tools',
      'Apply logical thinking and problem-solving to real-world challenges',
      'Collaborate on team projects and present their creations confidently',
      'Develop foundational coding skills through interactive, age-appropriate exercises',
      'Explore ethical use of AI and responsible technology habits',
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Common questions from parents and students.',
    items: [
      {
        question: 'Does my child need prior coding experience?',
        answer:
          'No prior experience is required. The workshop is designed for beginners aged 8–14, with step-by-step guidance from expert instructors.',
      },
      {
        question: 'What equipment is needed for the online sessions?',
        answer:
          'A laptop or tablet with a stable internet connection is sufficient. We will share a list of free software tools before the workshop begins.',
      },
      {
        question: 'Will students receive a certificate?',
        answer:
          'Yes. All participants who complete the 4-week program receive a digital certificate of completion from Gema Education.',
      },
    ],
  },
  registration: {
    title: 'Register for the Workshop',
    subtitle: 'Fill in your details below and we will contact you with enrollment information.',
    workshopTitle: 'AI & Robotics Summer Workshop',
  },
} as const

export type AiRoboticsDetailIcon = (typeof AI_ROBOTICS_WORKSHOP.details.items)[number]['icon']
