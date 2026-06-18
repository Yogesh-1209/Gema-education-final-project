export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_NAME ?? 'Gema Education',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000/api',
} as const
