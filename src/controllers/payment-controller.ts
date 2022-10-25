import { AuthenticatedRequest } from '@/middlewares';
import paymentService from '@/services/payment-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function confirmTicketPurchase(req: AuthenticatedRequest, res: Response) {
  const { userId, body: data } = req;
  // ESSE data PROVAVELMENTE VAI RECEBER UM TRATAMENTO DIFERENTE
  // QUANDO ENTRAR NO BONUS DE COMPRA NO CARTÃO USANDO O PAG.ME, ETC
  const result = await paymentService.createPurchaseEntry(userId, data.ticketType, data?.accommodation);
  res.status(httpStatus.CREATED).send(result);
  return;
}

export async function findTicketPurchase(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const result = await paymentService.findPurchaseEntry(userId);
  res.status(httpStatus.OK).send(result);
}
