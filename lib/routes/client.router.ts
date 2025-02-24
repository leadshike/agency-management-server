import express, { Router } from 'express';
import { crudRoutes } from '../constants/routes';
import { createClientPortal, deleteClient, getClientDetails } from '../controllers/client.controller';
import validate from '../middleware/validator';
import clientSchema from '../validations/client.validation';

const clientRouter: Router = express.Router();

clientRouter.post(crudRoutes.get, validate(clientSchema), createClientPortal);
clientRouter.get(crudRoutes.get, getClientDetails);
clientRouter.delete(crudRoutes.get, deleteClient);
export default clientRouter;