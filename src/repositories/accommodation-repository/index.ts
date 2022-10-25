import { prisma } from '@/config';
import { AccommodationType } from '@prisma/client';

async function findAll() {
  return prisma.accommodation.findMany();
}

async function findByLabel(label: AccommodationType) {
  return await prisma.accommodation.findFirst({
    where: {
      type: label,
    },
    select: {
      id: true,
      type: true,
    },
  });
}

const accommodationRepository = {
  findAll,
  findByLabel,
};

export default accommodationRepository;
