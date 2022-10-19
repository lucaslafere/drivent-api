import { prisma } from '@/config';

async function findAll() {
  return prisma.ticket.findMany();
}

const ticketRepository = {
    findAll,
};

export default ticketRepository;
