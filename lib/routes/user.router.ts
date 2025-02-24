import express, { Router } from 'express';
import { crudRoutes } from '../constants/routes';
import { getUsers } from '../controllers/user.controller';

const userRouter: Router = express.Router();

userRouter.post(crudRoutes.get, getUsers);
/* userRouter.post(crudRoutes.save, saveUser);
userRouter.post(crudRoutes.byId, getUserbyId);
userRouter.put(crudRoutes.byId, updateUser);
userRouter.delete(crudRoutes.byId, deleteUser);
userRouter.post(userRoutes.isRegistered, isRegistered); */

export default userRouter;