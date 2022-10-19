import ticketsService from '@/services/tickets-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAllTickets(_req: Request, res: Response) {
  const result = await ticketsService.getAllTickets();
  res.status(httpStatus.OK).send(result);
}
