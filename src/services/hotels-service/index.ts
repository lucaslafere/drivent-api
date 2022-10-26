import hotelRepository from '@/repositories/hotel-repository';
import { Hotel } from '@prisma/client';

async function getAllHotels(): Promise<Hotel[]> {
  const hotels = await hotelRepository.findAll();
  return hotels;
}

const hotelsService = {
  getAllHotels,
};

export default hotelsService;
