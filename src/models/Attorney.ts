// src/models/Attorney.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAttorney extends Document {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string; // URL to the image in public/ folder
  isActive: boolean;
}

const AttorneySchema: Schema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  specialty: { type: String, required: true },
  bio: { type: String, required: true },
  image: { type: String, required: false },
  isActive: { type: Boolean, default: true },
});

// Prevent model overwrite during hot reload
const Attorney: Model<IAttorney> = mongoose.models.Attorney || mongoose.model<IAttorney>('Attorney', AttorneySchema);

export default Attorney;