import { prisma } from '@/config';
import { TicketType } from '@prisma/client';

async function findAll() {
  return prisma.ticket.findMany();
}

async function findByLabel(data: TicketType) {
  return prisma.ticket.findFirst({
    where: {
      type: data,
    },
    select: {
      id: true,
    },
  });
}

const ticketRepository = {
  findAll,
  findByLabel,
};

export default ticketRepository;
