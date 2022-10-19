import { getAllTickets } from '@/controllers';
import { Router } from 'express';

const ticketsRouter = Router();

ticketsRouter.get('/', getAllTickets);

export { ticketsRouter };
