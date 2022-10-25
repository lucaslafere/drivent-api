import { prisma } from '@/config';

async function insert(userId: number, eventId: number, ticketId: number, accommodationId: number) {
  const data = { userId, eventId, ticketId, accommodationId };
  return prisma.userTicket.create({ data });
}

const paymentRepository = {
  insert,
};

export default paymentRepository;
