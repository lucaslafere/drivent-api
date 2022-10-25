import accommodationRepository from '@/repositories/accommodation-repository';
import { Accommodation, AccommodationType } from '@prisma/client';

async function getAllAccommodations(): Promise<Accommodation[]> {
  const accommodation = await accommodationRepository.findAll();
  return accommodation;
}

async function getAccommodationByType(label: AccommodationType): Promise<Partial<Accommodation>> {
  return await accommodationRepository.findByLabel(label);
}

const accommodationsService = {
  getAllAccommodations,
  getAccommodationByType,
};

export default accommodationsService;
