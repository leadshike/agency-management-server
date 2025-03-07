import express, { NextFunction, Request, Response, Router } from 'express';
import apiProviderRouter from './api_provider.router';
import campaignRouter from './campaign.router';
import clientRouter from './client.router';
import taskRouter from './task.router';
import userRouter from './user.router';
import vaRouter from './va.router';
const router: Router = express.Router();

let reqCount = 0;

router.get('/', async (req: Request, res: Response) => {
    console.log("home");
    res.send("Welcome to Server 1.0.0 ");
});

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log("_______________________________________________________");
    console.log(req.method + ' Request for ' + req.url + ' at ' + new Date().toLocaleString());
    reqCount++;
    console.log('reqCount : ' + reqCount);
    next();
});

router.use('/v1/auth', userRouter);
router.use('/v1/tasks', taskRouter);
router.use('/v1/campaign', campaignRouter);
router.use('/v1/client', clientRouter);
router.use('/v1/providers', apiProviderRouter);
router.use('/v1/va', vaRouter);

export default router;  