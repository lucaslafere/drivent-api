import { prisma } from '@/config';

async function findAll() {
  return prisma.ticket.findMany();
}

// async function insert(data) {
//   return prisma.ticket.create({ data });
// }

const ticketRepository = {
  findAll,
};

export default ticketRepository;
