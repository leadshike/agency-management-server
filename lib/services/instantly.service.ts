import axios from "axios";
import { ICampaign } from "../model/campaigns/campaign";
import { IInstantlyCreateCampaignRequest } from "../types/instantly/api_request_types";
import { IInstantlyCampaignAnalyticsResponse, IInstantlyCreateCampaignResponse, IInstantlyGetCampaignResponse } from "../types/instantly/api_response_types";
import { IInstantlyError } from '../types/instantly/error_type';

const INSTANTLY_CAMPAIGN_API_ENDPOINT = 'https://api.instantly.ai/api/v2/campaigns';

export class Instantly_Campaign_API {

    static createCampaign = async (campaign: ICampaign) => {
        try {
            const body: IInstantlyCreateCampaignRequest = {
                "name": campaign.campaign_name,
                "campaign_schedule": campaign.campaign_schedule,
                "pl_value": campaign.pl_value,
                "sequences": campaign.sequences,
                "email_list": campaign.email_list,
            };
            const api_key = process.env.INSTANTLY_API_KEY ?? '';
            const response = await axios.post(INSTANTLY_CAMPAIGN_API_ENDPOINT, body, {
                headers: {
                    "Authorization": `Bearer ${api_key}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.status != 200) {
                throw new IInstantlyError(response.data.message);
            }
            const campaignResponse: IInstantlyCreateCampaignResponse = response.data;
            return campaignResponse;
        } catch (error) {
            if (error instanceof IInstantlyError) {
                return error.message;
            }
            return null;
        }
    }

    static getCampaigns = async (last_campaignId: string | null) => {
        try {
            const api_key = process.env.INSTANTLY_API_KEY ?? '';
            let url = INSTANTLY_CAMPAIGN_API_ENDPOINT + `?limit=10`;
            if (last_campaignId) {
                url += `&starting_after=${last_campaignId}`;
            }
            const response = await axios.get(url, {
                headers: {
                    "Authorization": `Bearer ${api_key}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.status != 200) {
                throw new IInstantlyError(response.data.message);
            }
            const campaignResponse: IInstantlyGetCampaignResponse = response.data;
            return campaignResponse;
        } catch (error) {
            if (error instanceof IInstantlyError) {
                return error.message;
            }
            return null;
        }
    }

    static getCampaign = async (campaignId: string) => {
        try {
            const api_key = process.env.INSTANTLY_API_KEY ?? '';
            let url = INSTANTLY_CAMPAIGN_API_ENDPOINT + `/{${campaignId}}`;
            const response = await axios.get(url, {
                headers: {
                    "Authorization": `Bearer ${api_key}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.status != 200) {
                throw new IInstantlyError(response.data.message);
            }
            const campaignResponse: IInstantlyCreateCampaignResponse = response.data;
            return campaignResponse;
        } catch (error) {
            if (error instanceof IInstantlyError) {
                return error.message;
            }
            return null;
        }
    }

    static getCampaignAnalytics = async (id: string, start_date: string, end_date: string) => {
        try {
            const api_key = process.env.INSTANTLY_API_KEY ?? '';
            let url = INSTANTLY_CAMPAIGN_API_ENDPOINT + `?id=${id}&start_date=${start_date}&end_date=${end_date}`;
            const response = await axios.get(url, {
                headers: {
                    "Authorization": `Bearer ${api_key}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.status != 200) {
                throw new IInstantlyError(response.data.message);
            }
            const campaignResponse: IInstantlyCampaignAnalyticsResponse = response.data;
            return campaignResponse;
        } catch (error) {
            if (error instanceof IInstantlyError) {
                return error.message;
            }
            return null;
        }
    }

    static deleteCampaign = async (campaignId: string) => {
        try {
            const api_key = process.env.INSTANTLY_API_KEY ?? '';
            let url = INSTANTLY_CAMPAIGN_API_ENDPOINT + `/{${campaignId}}`;
            const response = await axios.delete(url, {
                headers: {
                    "Authorization": `Bearer ${api_key}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.status != 200) {
                throw new IInstantlyError(response.data.message);
            }
            const campaignResponse: IInstantlyCreateCampaignResponse = response.data;
            return campaignResponse;
        } catch (error) {
            if (error instanceof IInstantlyError) {
                return error.message;
            }
            return null;
        }
    }

    static startCampaign = async (campaignId: string) => {
        try {
            const api_key = process.env.INSTANTLY_API_KEY ?? '';
            let url = INSTANTLY_CAMPAIGN_API_ENDPOINT + `/${campaignId}/activate`;
            const response = await axios.post(url, {
                headers: {
                    "Authorization": `Bearer ${api_key}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.status != 200) {
                throw new IInstantlyError(response.data.message);
            }
            const campaignResponse: IInstantlyCreateCampaignResponse = response.data;
            return campaignResponse;
        } catch (error) {
            if (error instanceof IInstantlyError) {
                return error.message;
            }
            return null;
        }
    }

    static stopCampaign = async (campaignId: string) => {
        try {
            const api_key = process.env.INSTANTLY_API_KEY ?? '';
            let url = INSTANTLY_CAMPAIGN_API_ENDPOINT + `/${campaignId}/pause`;
            const response = await axios.post(url, {
                headers: {
                    "Authorization": `Bearer ${api_key}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.status != 200) {
                throw new IInstantlyError(response.data.message);
            }
            const campaignResponse: IInstantlyCreateCampaignResponse = response.data;
            return campaignResponse;
        } catch (error) {
            if (error instanceof IInstantlyError) {
                return error.message;
            }
            return null;
        }
    }

    static updateCampaign = async (campaignId: string) => {
        try {
            const api_key = process.env.INSTANTLY_API_KEY ?? '';
            let url = INSTANTLY_CAMPAIGN_API_ENDPOINT + `${campaignId}`;
            const response = await axios.patch(url, {
                headers: {
                    "Authorization": `Bearer ${api_key}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.status != 200) {
                throw new IInstantlyError(response.data.message);
            }
            const campaignResponse: IInstantlyCreateCampaignResponse = response.data;
            return campaignResponse;
        } catch (error) {
            if (error instanceof IInstantlyError) {
                return error.message;
            }
            return null;
        }
    }
}