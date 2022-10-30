import { notFoundError } from '@/errors';
import hotelRepository from '@/repositories/hotel-repository';
import userTicketRepository from '@/repositories/payment-repository';
import { Hotel, RoomUserTicket } from '@prisma/client';

async function getAllHotels(): Promise<Hotel[]> {
  const hotels = await hotelRepository.findAll();
  return hotels;
}

async function reserveHotelRoom(userId: number, roomId: number): Promise<RoomUserTicket> {
  const userTicket = await userTicketRepository.findUserTicketByUserId(userId);
  if (!userTicket) throw notFoundError();

  const room = await hotelRepository.findRoom(roomId);
  if (!room) throw notFoundError();

  const roomUserTicket = await hotelRepository.createRoomUserTicket(room.id, userTicket.id);
  return roomUserTicket;
}

const hotelsService = {
  getAllHotels,
  reserveHotelRoom,
};

export default hotelsService;
