import express, { Router } from 'express';
import { campaignRoutes, crudRoutes } from '../constants/routes';
import { createCampaign, deleteCampaign, getCampaignAnalytics, getCampaigns, startCampaign, stopCampaign } from '../controllers/campaign.controller';
import validate from '../middleware/validator';
import campaignSchema from '../validations/campaign.validation';

const campaignRouter: Router = express.Router();

campaignRouter.post(crudRoutes.get, validate(campaignSchema), createCampaign);
campaignRouter.get(`${crudRoutes.get}:id`, getCampaigns);
campaignRouter.get(`${campaignRoutes.analytics}/:id`, getCampaignAnalytics);
campaignRouter.delete(`${crudRoutes.get}:id`, deleteCampaign);
campaignRouter.post(`${campaignRoutes.start}/:id`, startCampaign);
campaignRouter.post(`${campaignRoutes.stop}/:id`, stopCampaign);

export default campaignRouter;