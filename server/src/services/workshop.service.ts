import mongoose from 'mongoose'
import { Workshop } from '../models/Workshop.js'
import { Registration } from '../models/Registration.js'
import type { RegisterWorkshopInput } from '../schemas/workshop.schema.js'
import type { RegistrationDTO } from '../types/index.js'
import { ApiError, ConflictError, NotFoundError } from '../utils/ApiError.js'
import { toWorkshopDTO } from '../utils/transformers.js'

export async function getAllWorkshops() {
  const workshops = await Workshop.find({ isActive: true }).sort({ createdAt: -1 })
  return workshops.map(toWorkshopDTO)
}

export async function getWorkshopById(id: string) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, 'Invalid workshop ID', 'INVALID_ID')
  }

  const workshop = await Workshop.findById(id)

  if (!workshop) {
    throw new NotFoundError('Workshop not found')
  }

  return toWorkshopDTO(workshop)
}

export async function registerForWorkshop(input: RegisterWorkshopInput): Promise<RegistrationDTO> {
  if (!mongoose.Types.ObjectId.isValid(input.workshopId)) {
    throw new ApiError(400, 'Invalid workshop ID', 'INVALID_ID')
  }

  const workshop = await Workshop.findOneAndUpdate(
    {
      _id: input.workshopId,
      isActive: true,
      $expr: { $lt: ['$registeredCount', '$capacity'] },
    },
    { $inc: { registeredCount: 1 } },
    { new: true },
  )

  if (!workshop) {
    const existing = await Workshop.findById(input.workshopId)

    if (!existing) {
      throw new NotFoundError('Workshop not found')
    }

    if (!existing.isActive) {
      throw new ApiError(400, 'This workshop is no longer available', 'WORKSHOP_INACTIVE')
    }

    throw new ConflictError('This workshop is fully booked')
  }

  try {
    const registration = await Registration.create({
      fullName: input.fullName,
      email: input.email.toLowerCase(),
      phone: input.phone || undefined,
      organization: input.organization || undefined,
      workshopId: workshop._id,
      status: 'confirmed',
    })

    return {
      id: registration._id.toString(),
      status: registration.status,
      message: 'Registration successful! We will send a confirmation email shortly.',
    }
  } catch (error) {
    await Workshop.updateOne({ _id: workshop._id }, { $inc: { registeredCount: -1 } })

    if (error instanceof mongoose.mongo.MongoServerError && error.code === 11000) {
      throw new ConflictError('You have already registered for this workshop')
    }

    throw error
  }
}
