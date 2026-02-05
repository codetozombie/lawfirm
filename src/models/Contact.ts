// src/models/Contact.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  message: string;
  submittedAt: Date;
  isRead: boolean;
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false },
});

const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;