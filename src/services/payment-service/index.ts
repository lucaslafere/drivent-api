import paymentRepository from '@/repositories/payment-repository';
import { UserTicket } from '@prisma/client';
import eventsService from '../events-service';

async function createPurchaseEntry(userId: number): Promise<Partial<UserTicket>> {
  const { id: eventId } = await eventsService.getFirstEvent();
  const response = await paymentRepository.insert(userId, eventId);
  return response;
}

async function findPurchaseEntry(userId: number): Promise<Partial<UserTicket>> {
  const { id: eventId } = await eventsService.getFirstEvent();
  const response = await paymentRepository.find(userId, eventId);
  return response;
}

const paymentService = {
  createPurchaseEntry,
  findPurchaseEntry,
};

export default paymentService;
