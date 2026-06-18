import type { WorkshopDocument } from '../models/Workshop.js'
import type { WorkshopDTO } from '../types/index.js'

export function toWorkshopDTO(workshop: WorkshopDocument): WorkshopDTO {
  return {
    id: workshop._id.toString(),
    title: workshop.title,
    description: workshop.description,
    date: workshop.date,
    duration: workshop.duration,
    location: workshop.location,
    capacity: workshop.capacity,
    registeredCount: workshop.registeredCount,
    price: workshop.price,
    isActive: workshop.isActive,
  }
}
