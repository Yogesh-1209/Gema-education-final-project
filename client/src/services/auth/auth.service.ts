import { apiClient, setAuthToken } from '@/services/api'
import type { AuthResponse, LoginPayload, SignupPayload, User } from './types'

const AUTH_ENDPOINTS = {
  register: '/auth/register',
  login: '/auth/login',
  me: '/auth/me',
} as const

export const authService = {
  async signup(payload: SignupPayload): Promise<AuthResponse> {
    const result = await apiClient.post<AuthResponse>(AUTH_ENDPOINTS.register, payload)
    setAuthToken(result.token)
    return result
  },

  async login(payload: LoginPayload): Promise<AuthResponse> {
    const result = await apiClient.post<AuthResponse>(AUTH_ENDPOINTS.login, payload)
    setAuthToken(result.token)
    return result
  },

  async getMe(): Promise<User> {
    return apiClient.get<User>(AUTH_ENDPOINTS.me)
  },
}
