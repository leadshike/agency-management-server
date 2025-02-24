import mongoose, { Document, ObjectId, Schema } from 'mongoose';


export interface IEmailAnalytics extends Document {
    id: ObjectId;
    total_accounts: number;
    health_account_count: number;
    warmup_disable_account_count: number;
    warmup_enabled_account_count: number;
    total_email_sent: number;
    unhealth_account_count: number;
    email_accounts: IEmailAccount[];
}

export interface IEmailAccount {
    name: string;
    email_sent: number;
    warmup_status: string;
    health_status: string;
}

const EmailAccountSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    email_sent: { type: Number, required: true },
    warmup_status: { type: String, required: true },
    health_status: { type: String, required: true },
});

const EmailAnalyticsSchema: Schema = new Schema({
    total_accounts: { type: Number, required: true },
    health_account_count: { type: Number, required: true },
    warmup_disable_account_count: { type: Number, required: true },
    warmup_enabled_account_count: { type: Number, required: true },
    total_email_sent: { type: Number, required: true },
    unhealth_account_count: { type: Number, required: true },
    email_accounts: { type: [EmailAccountSchema], required: true },
});

const EmailAnalytics = mongoose.model<IEmailAnalytics>('EmailAnalytics', EmailAnalyticsSchema);
export default EmailAnalytics;