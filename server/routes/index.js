import { Router } from 'express';
import offerRouter from './offerRoutes.js';
import userRouters  from './userRoutes.js';
import reviewRouter from './reviewRoutes.js';

const router = new Router();

router.use('/', offerRouter);
router.use('/', userRouters);
router.use('/comments', reviewRouter);

export { router };
