import mongoose, { Schema, type Document, type Model } from 'mongoose'

export interface IWorkshop {
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

export interface WorkshopDocument extends IWorkshop, Document {}

const workshopSchema = new Schema<WorkshopDocument>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    capacity: { type: Number, required: true, min: 1 },
    registeredCount: { type: Number, required: true, default: 0, min: 0 },
    price: { type: Number, required: true, min: 0 },
    isActive: { type: Boolean, required: true, default: true },
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

export const Workshop: Model<WorkshopDocument> =
  mongoose.models.Workshop ?? mongoose.model<WorkshopDocument>('Workshop', workshopSchema)
