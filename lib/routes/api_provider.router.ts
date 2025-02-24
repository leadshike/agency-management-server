import express, { Router } from 'express';
import { crudRoutes } from '../constants/routes';
import { createApiProvider, deleteApiProvider, getApiProviderDetails, updateApiProvider } from '../controllers/api_provider.controller';
import validate from '../middleware/validator';
import apiProviderSchema from '../validations/api_provider.validation';

const apiProviderRouter: Router = express.Router();

apiProviderRouter.post(crudRoutes.get, validate(apiProviderSchema), createApiProvider);
apiProviderRouter.get(crudRoutes.get, getApiProviderDetails);
apiProviderRouter.put(crudRoutes.get, updateApiProvider);
apiProviderRouter.delete(crudRoutes.get, deleteApiProvider);
export default apiProviderRouter;