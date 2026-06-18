import { apiClient } from '@/services/api'
import type {
  Workshop,
  WorkshopRegistrationPayload,
  WorkshopRegistrationResponse,
} from './types'

const WORKSHOP_ENDPOINTS = {
  list: '/workshops',
  detail: (id: string) => `/workshops/${id}`,
  register: '/workshops/register',
} as const

export const workshopService = {
  getWorkshops() {
    return apiClient.get<Workshop[]>(WORKSHOP_ENDPOINTS.list)
  },

  getWorkshopById(id: string) {
    return apiClient.get<Workshop>(WORKSHOP_ENDPOINTS.detail(id))
  },

  register(payload: WorkshopRegistrationPayload) {
    return apiClient.post<WorkshopRegistrationResponse>(
      WORKSHOP_ENDPOINTS.register,
      payload,
    )
  },
}
