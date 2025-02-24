import mongoose, { Document, ObjectId, Schema } from 'mongoose';
import { ICampaignSchedule } from './campaign_schedules';

export interface ICampaign extends Document {
    id: ObjectId;
    campaign_name: string;
    campaign_client: ObjectId;
    created_at: Date;
    status: number;
    last_updated_at: Date;
    workspaces: ObjectId[];
    analytics_Id: ObjectId;
    user_id: ObjectId;
    campaign_schedule: ICampaignSchedule[];
    sequences: ICampaignSequence[];
    campaign_analytics?: ObjectId;
    pl_value: number;
    email_list?: string[];
    daily_email_limit?: number;
}

export interface ICampaignSequence {
    sequences: IStepsConfig;
}

export interface IStepsConfig {
    steps: IStep[];
}

export interface IStep {
    type: string;
    delay: number;
    variants: IStepVariant[];
}

export interface IStepVariant {
    subject: string;
    body: string;
}


const CampaignSchema: Schema = new Schema({
    campaign_name: { type: String, required: true },
    campaign_client: { type: Schema.Types.ObjectId, required: true, },
    created_at: { type: Date, required: true },
    status: { type: Number, required: true },
    last_updated_at: { type: Date, required: true },
    workspaces: { type: Array<Schema.Types.ObjectId>, required: true },
    analytics_Id: { type: Schema.Types.ObjectId, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    campaign_schedule: { type: Array<Object>, required: true },
    sequences: { type: Object, required: true },
    campaign_analytics: { type: Schema.Types.ObjectId, required: false },
    pl_value: { type: Number, required: true },
    email_list: { type: Array<String>, required: false },
    daily_email_limit: { type: Number, required: false },
});

const Campaign = mongoose.model<ICampaign>('Campaign', CampaignSchema);
export default Campaign;