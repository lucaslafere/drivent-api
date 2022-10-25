import ticketRepository from '@/repositories/ticket-repository';
import { Ticket, TicketType } from '@prisma/client';

async function getAllTickets(): Promise<Ticket[]> {
  const ticket = await ticketRepository.findAll();
  return ticket;
}

async function getTicketByType(label: TicketType): Promise<Partial<Ticket>> {
  return await ticketRepository.findByLabel(label);
}

const ticketsService = {
  getAllTickets,
  getTicketByType,
};

export default ticketsService;
