import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import http, { createServer } from 'http';
import router from './routes/router';
import { connectToDatabase } from './services/mongodb.service';

const app: Express = express();
const httpServer: http.Server = createServer(app);
dotenv.config();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use(router);
const port: number = 80;

httpServer.listen(port, async function () {
    console.log(`current time ${new Date().toLocaleTimeString('en-IN')}`);
    console.log(`Example app listening at http://127.0.0.1:${port}`);
    await connectToDatabase();
    // connectRedis();
});
