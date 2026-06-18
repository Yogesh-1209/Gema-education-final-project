export interface Workshop {
  id: string
  title: string
  description: string
  date: string
  duration: string
  location: string
  capacity: number
  registeredCount: number
  price: number
  isActive: boolean
}

export interface WorkshopRegistrationPayload {
  fullName: string
  email: string
  phone?: string
  organization?: string
  workshopId: string
}

export interface WorkshopRegistrationResponse {
  id: string
  status: 'pending' | 'confirmed'
  message: string
}
