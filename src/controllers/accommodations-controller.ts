import accommodationsService from '@/services/accommodation-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getAllAccommodations(_req: Request, res: Response) {
  const result = await accommodationsService.getAllAccommodations();
  res.status(httpStatus.OK).send(result);
}
