import mongoose, { Document, ObjectId, Schema } from 'mongoose';


export interface ICampaignAnalytics extends Document {
    id: ObjectId;
    campaign_name: string;
    campaign_id: ObjectId;
    leads_count: number;
    contacted_count: number;
    open_count: number;
    reply_count: number;
    bounced_count: number;
    unsubscribed_count: number;
    completed_count: number;
    emails_sent_count: number;
    new_leads_contacted_count: number;
    created_at: Date;
    updated_at: Date;
    email_list_count: number;
    status: string;
}


const CampaignAnalyticsSchema: Schema = new Schema({
    campaign_name: { type: String, required: true },
    campaign_id: { type: Schema.Types.ObjectId, required: false, },
    leads_count: { type: Number, required: true },
    contacted_count: { type: Number, required: true },
    open_count: { type: Number, required: true },
    reply_count: { type: Number, required: true },
    bounced_count: { type: Number, required: true },
    unsubscribed_count: { type: Number, required: true },
    completed_count: { type: Number, required: true },
    emails_sent_count: { type: Number, required: true },
    new_leads_contacted_count: { type: Number, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
    email_list_count: { type: Number, required: true },
    status: { type: String, required: true },
});

const CampaignAnalytics = mongoose.model<ICampaignAnalytics>('CampaignAnalytics', CampaignAnalyticsSchema);
export default CampaignAnalytics;