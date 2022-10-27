import { prisma } from '@/config';

async function findAll() {
  return prisma.hotel.findMany({
    include: {
      Room: {
        select: {
          id: true,
          number: true,
          type: true,
          RoomUserTicket: true,
        },
      },
    },
  });
}

const hotelRepository = {
  findAll,
};

export default hotelRepository;
