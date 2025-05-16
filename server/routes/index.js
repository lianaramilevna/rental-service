import { Router } from 'express';
import offerRouter from './offerRoutes.js';
import userRouters  from './userRoutes.js';

const router = new Router();

router.use('/', offerRouter);
router.use('/', userRouters);

export { router };
