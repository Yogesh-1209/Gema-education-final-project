import mongoose, { Schema, type Document, type Model, type Types } from 'mongoose'

export interface IEnquiry {
  fullName: string
  email: string
  phone: string
  workshopTitle: string
  workshopId?: Types.ObjectId
}

export interface EnquiryDocument extends IEnquiry, Document {}

const enquirySchema = new Schema<EnquiryDocument>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    workshopTitle: { type: String, required: true, trim: true },
    workshopId: { type: Schema.Types.ObjectId, ref: 'Workshop' },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_doc, ret: Record<string, unknown> & { _id?: { toString(): string } }) {
        ret.id = ret._id?.toString()
        delete ret._id
        delete ret.__v
        return ret
      },
    },
  },
)

enquirySchema.index({ email: 1, workshopTitle: 1 })

export const Enquiry: Model<EnquiryDocument> =
  mongoose.models.Enquiry ?? mongoose.model<EnquiryDocument>('Enquiry', enquirySchema)
