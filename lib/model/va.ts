import mongoose, { Document, ObjectId, Schema } from 'mongoose';

export interface IVirtualAssistant extends Document {
    _id: ObjectId;
    first_name: string;
    last_name: string;
    email: string;
    profile_pic_id: number;
    status: string;
    invited_at: Date;
    updated_at: Date;
}

const VirtualAssistantSchema: Schema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profile_pic_id: { type: Number, required: true },
    status: { type: String, enum: ['active', 'inactive'], required: true },
    invited_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
},);

const VirtualAssistant = mongoose.model<IVirtualAssistant>('VirtualAssistant', VirtualAssistantSchema);

export default VirtualAssistant;