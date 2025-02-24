import Joi from 'joi';

const apiProviderSchema: Joi.ObjectSchema = Joi.object({
    provider_name: Joi.string().required(),
    api_key: Joi.string().required(),
    api_key_name: Joi.string().required(),
    created_at: Joi.date().required(),
    modified_at: Joi.date().optional(),
    email: Joi.string().email().optional().allow(''),
    user_id: Joi.string().required(),
});

export default apiProviderSchema;
