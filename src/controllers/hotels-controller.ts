import { Request, Response } from 'express';
import httpStatus from 'http-status';

import hotelsService from '@/services/hotels-service';

export async function getAllHotels(_req: Request, res: Response) {
  const result = await hotelsService.getAllHotels();
  res.status(httpStatus.OK).send(result);
}
