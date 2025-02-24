
import Joi from 'joi';

const taskSchema: Joi.ObjectSchema = Joi.object({
    _id: Joi.string().optional().allow(''),
    user_id: Joi.string().required(),
    task_id: Joi.string().required(),
    task_instructions: Joi.string().optional().allow(''),
    assigned_va_id: Joi.string().required(),
    assigned_va_name: Joi.string().required(),
    priority: Joi.string().required(),
    task_deadline: Joi.string().required(),
    status: Joi.string().optional().allow(''),
});

export default taskSchema;