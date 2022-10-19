import accommodationRepository from '@/repositories/accommodation-repository';
import { Accommodation } from '@prisma/client';

async function getAllAccommodations(): Promise<Accommodation[]> {
  const accommodation = await accommodationRepository.findAll();
  return accommodation
}

const accommodationsService = {
  getAllAccommodations
};

export default accommodationsService;
