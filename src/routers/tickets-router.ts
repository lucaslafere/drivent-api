import { confirmTicketPurchase, getAllTickets } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { purchaseInfo } from '@/schemas/ticket-purchase-schema';
import { Router } from 'express';

const ticketsRouter = Router();

ticketsRouter.get('/', getAllTickets);
ticketsRouter.post('/', authenticateToken, validateBody(purchaseInfo), confirmTicketPurchase);

export { ticketsRouter };
