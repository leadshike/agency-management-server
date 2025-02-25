import { Request, Response } from "express";
import httpStatus from "http-status";
import Campaign, { ICampaign } from "../model/campaigns/campaign";
import CampaignAnalytics, { ICampaignAnalytics } from "../model/campaigns/campaign_analytics";

export const createCampaign = async (
    req: Request,
    res: Response) => {
    console.log("createCampaign");
    const { campaign_name, email_list } = req.body;
    try {
        const campaignAnalytics = new CampaignAnalytics({
            campaign_name: campaign_name,
            leads_count: 0,
            contacted_count: 0,
            open_count: 0,
            reply_count: 0,
            bounced_count: 0,
            unsubscribed_count: 0,
            completed_count: 0,
            emails_sent_count: 0,
            new_leads_contacted_count: 0,
            created_at: new Date(),
            updated_at: new Date(),
            email_list_count: email_list?.length ?? 0,
            status: 'Created',
        });
        const savedCampaignAnalytics: ICampaignAnalytics = await campaignAnalytics.save();

        const body = req.body;
        body.analytics_Id = savedCampaignAnalytics.id;
        body.created_at = new Date();
        body.last_updated_at = new Date();

        const campaign = new Campaign(body);
        const savedCampaign: ICampaign = await campaign.save();
        savedCampaignAnalytics.campaign_id = savedCampaign.id;
        savedCampaignAnalytics.save();
        res.status(httpStatus.OK).json(savedCampaign);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const getCampaigns = async (
    req: Request,
    res: Response) => {
    console.log("getCampaigns");
    const id = req.params.id;
    if (!id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        const campaigns: ICampaign | null = await Campaign.findById(id);
        if (!campaigns) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No Campaign Found' });
        }
        res.status(httpStatus.OK).json(campaigns);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const getCampaignAnalytics = async (
    req: Request,
    res: Response) => {
    console.log("getCampaignAnalytics");
    const id = req.params.id;
    if (!id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        const campaigns: ICampaignAnalytics | null = await CampaignAnalytics.findById(id);
        if (!campaigns) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No CampaignAnalytics Found' });
        }
        res.status(httpStatus.OK).json(campaigns);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const deleteCampaign = async (
    req: Request,
    res: Response) => {
    console.log("deleteCampaign");
    const id = req.params.id;
    if (!id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        const campaigns: ICampaign | null = await Campaign.findByIdAndDelete(id);
        if (!campaigns) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No Campaign Found' });
        }
        await CampaignAnalytics.findByIdAndDelete(campaigns.analytics_Id);
        res.status(httpStatus.OK).json(campaigns);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const startCampaign = async (
    req: Request,
    res: Response) => {
    console.log("startCampaign");
    const id = req.params.id;
    if (!id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        const campaigns: ICampaign | null = await Campaign.findByIdAndUpdate(id, {
            $set: {
                status: 1,
                last_updated_at: new Date(),
            }
        });
        if (!campaigns) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No Campaign Found' });
        }
        res.status(httpStatus.OK).json(campaigns);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export const stopCampaign = async (
    req: Request,
    res: Response) => {
    console.log("stopCampaign");
    const id = req.params.id;
    if (!id) {
        return res.status(httpStatus.BAD_GATEWAY).json({ message: 'Bad Request' });
    }
    try {
        const campaigns: ICampaign | null = await Campaign.findByIdAndUpdate(id, {
            $set: {
                status: 2,
                last_updated_at: new Date(),
            }
        });
        if (!campaigns) {
            return res.status(httpStatus.NOT_FOUND).json({ message: 'No Campaign Found' });
        }
        res.status(httpStatus.OK).json(campaigns);
    } catch (error) {
        if (error instanceof Error)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}
