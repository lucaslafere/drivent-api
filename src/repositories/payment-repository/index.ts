import { prisma } from '@/config';

async function insert(userId: number, eventId: number) {
  const data = { userId, eventId };
  return prisma.userTicket.create({ data });
}

const paymentRepository = {
  insert,
};

export default paymentRepository;
