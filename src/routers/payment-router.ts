import { confirmTicketPurchase } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { purchaseInfo } from '@/schemas/ticket-purchase-schema';
import { Router } from 'express';

const paymentRouter = Router();

paymentRouter.all('/*', authenticateToken);
paymentRouter.post('/', validateBody(purchaseInfo), confirmTicketPurchase);

export { paymentRouter };
