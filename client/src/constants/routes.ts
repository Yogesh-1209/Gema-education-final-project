export const ROUTES = {
  HOME: '/',
  AI_ROBOTICS_WORKSHOP: '/workshops/ai-robotics-summer',
  LOGIN: '/login',
  SIGNUP: '/signup',
  NOT_FOUND: '*',
} as const

export type RoutePath = typeof ROUTES[keyof typeof ROUTES]
