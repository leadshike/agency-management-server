import express, { Router } from 'express';
import { crudRoutes } from '../constants/routes';
import { addVirtualAssistant, deleteVirtualAssistant, getVirtualAssistants, updateVirtualAssistantStatus } from '../controllers/va.controller';

const vaRouter: Router = express.Router();

vaRouter.get(crudRoutes.get, getVirtualAssistants);
vaRouter.post(crudRoutes.get, addVirtualAssistant);
vaRouter.put(`${crudRoutes.get}:id`, updateVirtualAssistantStatus);
vaRouter.delete(`${crudRoutes.get}:id`, deleteVirtualAssistant);

export default vaRouter;