import express, { Router } from 'express';
import { crudRoutes, taskRoutes } from '../constants/routes';
import { assignTasks, getAssignedTasks, updateTaskStatus } from '../controllers/task.controller';
import validate from '../middleware/validator';
import taskSchema from '../validations/task.validation';

const taskRouter: Router = express.Router();

taskRouter.get(crudRoutes.get, getAssignedTasks);
taskRouter.post(taskRoutes.status, updateTaskStatus);
taskRouter.post(taskRoutes.assign, validate(taskSchema), assignTasks);

export default taskRouter;