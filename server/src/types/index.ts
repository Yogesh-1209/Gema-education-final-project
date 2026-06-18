export interface ApiSuccessResponse<T> {
  data: T
  message?: string
}

export interface WorkshopDTO {
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

export interface RegistrationDTO {
  id: string
  status: 'pending' | 'confirmed'
  message: string
}

export interface HealthDTO {
  status: 'ok'
  timestamp: string
  uptime: number
  environment: string
}

export interface UserDTO {
  id: string
  fullName: string
  email: string
}

export interface AuthResponseDTO {
  user: UserDTO
  token: string
}
