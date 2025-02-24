import Joi from 'joi';

const clientSchema: Joi.ObjectSchema = Joi.object({
    client_name: Joi.string().required(),
    client_face_id: Joi.number().required(),
    total_campaign: Joi.number().required(),
    campaigns: Joi.array().items(Joi.string()).optional(),
    email_accounts: Joi.number().required(),
    positive_reply_rate: Joi.number().required(),
    stage: Joi.string().required(),
    api_providers: Joi.array().items(Joi.string()).optional(),
    assigned_va: Joi.string().required(),
    onboard_template_id: Joi.number().required(),
    client_tasks: Joi.array().items(Joi.string()).required(),
    client_campaign_analytics: Joi.array().items(Joi.string()).optional(),
    client_email_analytics: Joi.string().optional(),
    client_lead_analytics: Joi.array().items(Joi.string()).optional(),
    domain_analytics: Joi.string().optional(),
});

export default clientSchema;
