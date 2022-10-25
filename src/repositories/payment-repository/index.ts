import { prisma } from '@/config';

async function insert(userId: number, eventId: number) {
  const data = { userId, eventId };
  return prisma.userTicket.create({ data });
}

async function find(userId: number, eventId: number) {
  return prisma.userTicket.findFirst({
    where: {
      AND: [{ userId }, { eventId }],
    },
  });
}
const paymentRepository = {
  insert,
  find,
};

export default paymentRepository;
