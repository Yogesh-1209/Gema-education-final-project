export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  NOT_FOUND: '*',
} as const

export type RoutePath = typeof ROUTES[keyof typeof ROUTES]
