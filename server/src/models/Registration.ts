import mongoose, { Schema, type Document, type Model, type Types } from 'mongoose'

export type RegistrationStatus = 'pending' | 'confirmed'

export interface IRegistration {
  fullName: string
  email: string
  phone?: string
  organization?: string
  workshopId: Types.ObjectId
  status: RegistrationStatus
}

export interface RegistrationDocument extends IRegistration, Document {}

const registrationSchema = new Schema<RegistrationDocument>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    organization: { type: String, trim: true },
    workshopId: { type: Schema.Types.ObjectId, ref: 'Workshop', required: true, index: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed'],
      default: 'confirmed',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform(_doc, ret: Record<string, unknown> & { _id?: { toString(): string } }) {
        ret.id = ret._id?.toString()
        delete ret._id
        delete ret.__v
        return ret
      },
    },
  },
)

registrationSchema.index({ workshopId: 1, email: 1 }, { unique: true })

export const Registration: Model<RegistrationDocument> =
  mongoose.models.Registration ??
  mongoose.model<RegistrationDocument>('Registration', registrationSchema)
