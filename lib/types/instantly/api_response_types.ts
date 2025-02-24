import { ICampaignSchedule } from "../../model/campaigns/campaign_schedules";

export interface IInstantlyCreateCampaignResponse {
    id: string;
    name: string;
    status: number;
    campaign_schedule: {
        start_date: Date;
        end_date: Date;
        schedules: ICampaignSchedule[];
    };
    timestamp_created: string;
    timestamp_updated: string;
    email_list: string[];
}

export interface IInstantlyGetCampaignResponse {
    items: IInstantlyCreateCampaignResponse[];
    next_starting_after: string;
}

export interface IInstantlyCampaignAnalyticsResponse {
    campaign_name: string;
    campaign_id: string;
    leads_count: number;
    contacted_count: number;
    open_count: number;
    reply_count: number;
    bounced_count: number;
    unsubscribed_count: number;
    completed_count: number;
    emails_sent_count: number;
    new_leads_contacted_count: number;
}