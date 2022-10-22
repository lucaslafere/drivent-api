import ticketRepository from '@/repositories/ticket-repository';
import { UserTicket } from '@prisma/client';

async function createPurchaseEntry(): Promise<Partial<UserTicket>> {
  // const response = await ticketRepository.insert(data);
  // return response;
  return;
}

const paymentService = {
  createPurchaseEntry,
};

export default paymentService;
