import express, { Router } from 'express';
import { crudRoutes } from '../constants/routes';
import { createClientPortal, deleteClient, getClientDetails, updateClientStatus } from '../controllers/client.controller';
import validate from '../middleware/validator';
import clientSchema from '../validations/client.validation';

const clientRouter: Router = express.Router();

clientRouter.post(crudRoutes.get, validate(clientSchema), createClientPortal);
clientRouter.get(`${crudRoutes.get}:id`, getClientDetails);
clientRouter.delete(`${crudRoutes.get}:id`, deleteClient);
clientRouter.put(`${crudRoutes.get}:id`, updateClientStatus);
export default clientRouter;