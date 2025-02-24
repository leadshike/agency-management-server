import mongoose, { Document, Schema } from 'mongoose';

export interface ILead extends Document {
    provider_id: string;
    timestamp_created: Date;
    timestamp_updated: Date;
    organization: string;
    status: number;
    email_open_count: number;
    email_reply_count: number;
    email_click_count: number;
    company_domain: number;
    status_summary: IStatusSummary;
    campaign_id: string;
    lead_email: string;
    website?: string;
    last_name?: string;
    first_name?: string;
    company_name?: string;
    email_opened_step?: number;
    lead_interest_status?: number;
    verification_status?: number;
    timestamp_last_open?: Date;
    timestamp_last_reply?: Date;
}
interface IStatusSummary {
    from: string;
    stepID: string;
    timestamp_executed: string;
}

const StatusSummarySchema = new Schema<IStatusSummary>({
    from: { type: String, required: true },
    stepID: { type: String, required: true },
    timestamp_executed: { type: String, required: true },
});

const LeadSchema = new Schema<ILead>({
    provider_id: { type: String, required: true },
    timestamp_created: { type: Date, required: true },
    timestamp_updated: { type: Date, required: true },
    organization: { type: String, required: true },
    status: { type: Number, required: true },
    email_open_count: { type: Number, required: true },
    email_reply_count: { type: Number, required: true },
    email_click_count: { type: Number, required: true },
    company_domain: { type: Number, required: true },
    status_summary: { type: StatusSummarySchema, required: true },
    campaign_id: { type: String, required: true },
    lead_email: { type: String, required: true },
    website: { type: String },
    last_name: { type: String },
    first_name: { type: String },
    company_name: { type: String },
    email_opened_step: { type: Number },
    lead_interest_status: { type: Number },
    verification_status: { type: Number },
    timestamp_last_open: { type: Date },
    timestamp_last_reply: { type: Date },
});

const Lead = mongoose.model<ILead>('Lead', LeadSchema);
export default Lead;