import ticketRepository from '@/repositories/ticket-repository';
import { Ticket } from '@prisma/client';

async function getAllTickets(): Promise<Ticket[]> {
  const ticket = await ticketRepository.findAll();
  return ticket
}

const ticketsService = {
  getAllTickets
};

export default ticketsService;
