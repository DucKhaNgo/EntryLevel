import * as dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response } from 'express';
import cors from "cors";
import router from './routes';

const app: Express = express();
const port = 3001;

app.use(cors());

app.use(router);
app.get('/', (req: Request, res: Response) => {
    res.json('Hello, this is Express + TypeScript');
});

app.listen(port, () => {

    console.log(`[Server]: I am running at http://localhost:${port}`);
});