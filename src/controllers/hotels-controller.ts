import { Request, Response } from 'express';
import httpStatus from 'http-status';

import hotelsService from '@/services/hotels-service';
import { AuthenticatedRequest } from '@/middlewares';

export async function getAllHotels(_req: Request, res: Response) {
  const result = await hotelsService.getAllHotels();
  res.status(httpStatus.OK).send(result);
}

export async function reserveHotelRoom(req: AuthenticatedRequest, res: Response) {
  const { userId, body: data } = req;
  const result = await hotelsService.reserveHotelRoom(userId, data.id);
  res.status(httpStatus.CREATED).send(result);
}
