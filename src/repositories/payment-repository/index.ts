import { prisma } from '@/config';

async function insert(data) {
  return prisma.ticket.create({ data });
}

const paymentRepository = {
  insert,
};

export default paymentRepository;
