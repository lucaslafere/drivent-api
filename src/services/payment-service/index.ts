import paymentRepository from '@/repositories/payment-repository';
import { AccommodationType, TicketType, UserTicket } from '@prisma/client';
import accommodationsService from '../accommodation-service';
import eventsService from '../events-service';
import ticketsService from '../tickets-service';

async function createPurchaseEntry(
  userId: number,
  type: TicketType,
  accommodation: AccommodationType = 'WithoutInn',
): Promise<Partial<UserTicket>> {
  const { id: eventId } = await eventsService.getFirstEvent();
  const { id: ticketId } = await ticketsService.getTicketByType(type);
  const { id: accommodationId } = await accommodationsService.getAccommodationByType(accommodation);
  const response = await paymentRepository.insert(userId, eventId, ticketId, accommodationId);
  return response;
}

const paymentService = {
  createPurchaseEntry,
};

export default paymentService;
