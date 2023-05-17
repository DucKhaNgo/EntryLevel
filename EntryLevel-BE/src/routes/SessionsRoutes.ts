import express from 'express';

import { getAllSessions } from '../controllers/SessionsController';

const SessionRouter = express.Router();


SessionRouter.get("/", getAllSessions);


export default SessionRouter;