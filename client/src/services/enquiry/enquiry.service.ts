import { apiClient } from '@/services/api'

export interface EnquiryPayload {
  fullName: string
  email: string
  phone: string
  workshopTitle?: string
}

export interface EnquiryResponse {
  id: string
  fullName: string
  email: string
  workshopTitle: string
}

export const enquiryService = {
  submit(payload: EnquiryPayload) {
    return apiClient.post<EnquiryResponse>('/enquiry', payload)
  },
}
