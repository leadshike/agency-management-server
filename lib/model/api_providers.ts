import mongoose, { Document, ObjectId, Schema } from 'mongoose';

export interface IApiProvider extends Document {
    id: ObjectId;
    provider_name: string;
    api_key: string;
    api_key_name: string;
    created_at: Date;
    modified_at?: Date;
    email?: string;
    user_id: string;
}

const ApiProviderSchema: Schema = new Schema({
    provider_name: { type: String, required: true },
    api_key: { type: String, required: true },
    api_key_name: { type: String, required: true },
    created_at: { type: Date, required: true },
    modified_at: { type: Date, required: false, default: new Date() },
    email: { type: String, required: false, default: '' },
    user_id: { type: Schema.Types.String, required: true },
});

const ApiProvider = mongoose.model<IApiProvider>('ApiProvider', ApiProviderSchema);
export default ApiProvider;