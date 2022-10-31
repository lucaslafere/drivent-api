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

async function findRoom(id: number) {
  return prisma.room.findFirst({ where: { id } });
}

async function createRoomUserTicket(roomId: number, userTicketId: number) {
  return prisma.roomUserTicket.create({ data: { roomId, userTicketId } });
}

const hotelRepository = {
  findAll,
  findRoom,
  createRoomUserTicket,
};

export default hotelRepository;
