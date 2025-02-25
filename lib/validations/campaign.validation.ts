import Joi from 'joi';

const campaignSchema: Joi.ObjectSchema = Joi.object({
    campaign_name: Joi.string().required(),
    campaign_client: Joi.string().required(),
    status: Joi.number().required(),
    user_id: Joi.string().required(),
    campaign_schedule: Joi.array().items(Joi.object()).required(),
    sequences: Joi.array().items(Joi.object()).required(),
    pl_value: Joi.number().optional(),
    email_list: Joi.array().items(Joi.string().email()).optional(),
    daily_email_limit: Joi.number().optional(),
});

export default campaignSchema;
