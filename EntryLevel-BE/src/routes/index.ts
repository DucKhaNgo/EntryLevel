import express from 'express';
import SessionRouter from './SessionsRoutes';

const router = express.Router();


router.use('/sessions', SessionRouter);


export default router;