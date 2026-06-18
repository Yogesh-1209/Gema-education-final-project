import bcrypt from 'bcryptjs'
import mongoose, { Schema, type Document, type Model } from 'mongoose'

export interface IUser {
  fullName: string
  email: string
  password: string
}

export interface UserDocument extends IUser, Document {
  comparePassword(candidate: string): Promise<boolean>
}

const userSchema = new Schema<UserDocument>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true, minlength: 8, select: false },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_doc, ret: Record<string, unknown> & { _id?: { toString(): string } }) {
        ret.id = ret._id?.toString()
        delete ret._id
        delete ret.__v
        delete ret.password
        return ret
      },
    },
  },
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
    return
  }

  this.password = await bcrypt.hash(this.password, 12)
  next()
})

userSchema.methods.comparePassword = async function (candidate: string): Promise<boolean> {
  return bcrypt.compare(candidate, this.password)
}

export const User: Model<UserDocument> =
  mongoose.models.User ?? mongoose.model<UserDocument>('User', userSchema)
