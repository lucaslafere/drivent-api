import { Router } from 'express';

import { getAllHotels } from '@/controllers';
import { authenticateToken } from '@/middlewares';

const hotelsRouter = Router();

hotelsRouter.all('/*', authenticateToken);
hotelsRouter.get('/', getAllHotels);

export { hotelsRouter };
