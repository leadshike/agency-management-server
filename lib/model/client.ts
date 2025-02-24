import mongoose, { Document, ObjectId, Schema } from 'mongoose';

export interface IClient extends Document {
    _id: ObjectId;
    client_name: string;
    client_face_id: number;
    total_campaign: number;
    campaigns: ObjectId[];
    email_accounts: number;
    positive_reply_rate: number;
    stage: string;
    api_providers: ObjectId[];
    assigned_va: ObjectId;
    onboard_template_id: number;
    client_tasks: ObjectId[];
    client_campaign_analytics: ObjectId[];
    client_email_analytics: ObjectId | null;
    client_lead_analytics: ObjectId[];
    domain_analytics: ObjectId | null;
}

const ClientSchema: Schema = new Schema({
    client_name: { type: String, required: true, },
    client_face_id: { type: Number, required: true },
    total_campaign: { type: Number, required: true },
    campaigns: { type: Array<Schema.Types.ObjectId>, required: false, default: [] },
    email_accounts: { type: Number, required: true },
    stage: { type: String, required: true },
    api_providers: { type: Array<Schema.Types.ObjectId>, required: false, default: [] },
    assigned_va: { type: Schema.Types.ObjectId, required: true },
    onboard_template_id: { type: Number, required: true },
    client_tasks: { type: Array<Schema.Types.ObjectId>, required: false, default: [] },
    client_campaign_analytics: { type: Array<Schema.Types.ObjectId>, required: false, default: [] },
    client_email_analytics: { type: Schema.Types.ObjectId, required: false },
    client_lead_analytics: { type: Array<Schema.Types.ObjectId>, required: false, default: [] },
    domain_analytics: { type: Schema.Types.ObjectId, required: false },
});

const Client = mongoose.model<IClient>('Client', ClientSchema);
export default Client;