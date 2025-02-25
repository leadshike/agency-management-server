import Joi from 'joi';

const virtualAssistantSchema = Joi.object({
    first_name: Joi.string().min(2).max(50).required(),
    last_name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    profile_pic_id: Joi.number().integer().required(),
    status: Joi.string().valid('active', 'inactive').required(),
});

export default virtualAssistantSchema;