import { prisma } from '@/config';
import { UserTicket } from '@prisma/client';

async function insert(
  userId: number,
  eventId: number,
  ticketId: number,
  accommodationId: number,
): Promise<Omit<UserTicket, 'eventId' | 'ticketId' | 'accommodationId' | 'createdAt' | 'userId'> | null> {
  const data = { userId, eventId, ticketId, accommodationId };
  return prisma.userTicket.create({
    data,
    select: {
      id: true,
    },
  });
}

const paymentRepository = {
  insert,
};

export default paymentRepository;
