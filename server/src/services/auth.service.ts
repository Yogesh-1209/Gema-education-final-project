import mongoose from 'mongoose'
import { User } from '../models/User.js'
import type { LoginUserInput, RegisterUserInput } from '../schemas/auth.schema.js'
import type { AuthResponseDTO, UserDTO } from '../types/index.js'
import { ApiError, ConflictError, NotFoundError } from '../utils/ApiError.js'
import { signToken } from '../utils/jwt.js'

function toUserDTO(user: { _id: mongoose.Types.ObjectId; fullName: string; email: string }): UserDTO {
  return {
    id: user._id.toString(),
    fullName: user.fullName,
    email: user.email,
  }
}

function buildAuthResponse(user: { _id: mongoose.Types.ObjectId; fullName: string; email: string }): AuthResponseDTO {
  const userDto = toUserDTO(user)
  const token = signToken({ userId: userDto.id, email: userDto.email })
  return { user: userDto, token }
}

export async function registerUser(input: RegisterUserInput): Promise<AuthResponseDTO> {
  const existing = await User.findOne({ email: input.email.toLowerCase() })

  if (existing) {
    throw new ConflictError('An account with this email already exists')
  }

  const user = await User.create({
    fullName: input.fullName,
    email: input.email.toLowerCase(),
    password: input.password,
  })

  return buildAuthResponse(user)
}

export async function loginUser(input: LoginUserInput): Promise<AuthResponseDTO> {
  const user = await User.findOne({ email: input.email.toLowerCase() }).select('+password')

  if (!user) {
    throw new ApiError(401, 'Invalid email or password', 'INVALID_CREDENTIALS')
  }

  const isValid = await user.comparePassword(input.password)

  if (!isValid) {
    throw new ApiError(401, 'Invalid email or password', 'INVALID_CREDENTIALS')
  }

  return buildAuthResponse(user)
}

export async function getUserById(userId: string): Promise<UserDTO> {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new ApiError(400, 'Invalid user ID', 'INVALID_ID')
  }

  const user = await User.findById(userId)

  if (!user) {
    throw new NotFoundError('User not found')
  }

  return toUserDTO(user)
}
