import { getAllAccommodations } from '@/controllers';
import { Router } from 'express';

const accommodationsRouter = Router();

accommodationsRouter.get('/', getAllAccommodations);

export { accommodationsRouter };
