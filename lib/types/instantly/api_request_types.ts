import { ICampaignSequence } from "../../model/campaigns/campaign";
import { ICampaignSchedule } from "../../model/campaigns/campaign_schedules";

export interface IInstantlyCreateCampaignRequest {
    name: string;
    campaign_schedule: ICampaignSchedule[];
    pl_value: number;
    sequences: ICampaignSequence[];
    email_list?: string[];
}
