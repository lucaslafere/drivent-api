import paymentRepository from '@/repositories/payment-repository';
import { AccommodationType, TicketType, UserTicket } from '@prisma/client';
import accommodationsService from '../accommodation-service';
import eventsService from '../events-service';
import ticketsService from '../tickets-service';

async function createPurchaseEntry(
  userId: number,
  type: TicketType,
  accommodation: AccommodationType = 'WithoutInn',
): Promise<TUserTicketResponse> {
  const { id: eventId } = await eventsService.getFirstEvent();
  const { type: ticketType, id: ticketId } = await ticketsService.getTicketByType(type);
  const { type: accommodationType, id: accommodationId } = await accommodationsService.getAccommodationByType(
    accommodation,
  );
  const response = await paymentRepository.insert(userId, eventId, ticketId, accommodationId);
  return { ...response, ticketType, accommodationType };
}

async function findPurchaseEntry(userId: number): Promise<Partial<UserTicket>> {
  const { id: eventId } = await eventsService.getFirstEvent();
  const response = await paymentRepository.find(userId, eventId);
  return response;
}

type TUserTicketResponse = {
  id: number;
  ticketType: TicketType;
  accommodationType: AccommodationType;
};

const paymentService = {
  createPurchaseEntry,
  findPurchaseEntry,
};

export default paymentService;
