import { Router } from 'express';

import { getAllHotels, reserveHotelRoom } from '@/controllers';
import { authenticateToken } from '@/middlewares';

const hotelsRouter = Router();

hotelsRouter.all('/*', authenticateToken);
hotelsRouter.get('/', getAllHotels);
hotelsRouter.post('/', reserveHotelRoom);

export { hotelsRouter };
