import mongoose, { Document, ObjectId, Schema } from 'mongoose';

export interface IDomainAnalytics extends Document {
    id: ObjectId;
    stats: IDomainStats[];
}

export interface IDomainStats {
    name: string;
    dkim: boolean;
    spf: boolean;
    dmark: boolean;
    mx: boolean;
}
const DomainStatsSchema: Schema = new Schema({
    name: { type: String, required: true },
    dkim: { type: Boolean, required: true },
    spf: { type: Boolean, required: true },
    dmark: { type: Boolean, required: true },
    mx: { type: Boolean, required: true },
});

const DomainAnalyticsSchema: Schema = new Schema({
    stats: { type: [DomainStatsSchema], required: true },
});

const DomainAnalytics = mongoose.model<IDomainAnalytics>('DomainAnalytics', DomainAnalyticsSchema);
export default DomainAnalytics;