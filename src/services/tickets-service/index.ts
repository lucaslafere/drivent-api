import ticketRepository from '@/repositories/ticket-repository';
import { Ticket, UserTicket } from '@prisma/client';

async function getAllTickets(): Promise<Ticket[]> {
  const ticket = await ticketRepository.findAll();
  return ticket;
}

async function createPurchaseEntry(): Promise<Partial<UserTicket>> {
  // const response = await ticketRepository.insert(data);
  // return response;
  return;
}

const ticketsService = {
  getAllTickets,
  createPurchaseEntry,
};

export default ticketsService;
