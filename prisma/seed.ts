import { PrismaClient, RoomType } from '@prisma/client';
import dayjs from 'dayjs';
const prisma = new PrismaClient();

const hotelsName = ['Driven Resort', 'Driven Palace', 'Driven World'];

const roomNumbers = [
  101, 102, 103, 104, 105, 201, 202, 203, 204, 205, 301, 302, 303, 304, 305, 401, 402, 403, 404, 405,
];

const roomTypes = ['Single', 'Double', 'Triple'];

async function main() {
  let event = await prisma.event.findFirst();
  if (!event) {
    event = await prisma.event.create({
      data: {
        title: 'Driven.t',
        logoImageUrl: 'https://files.driveneducation.com.br/images/logo-rounded.png',
        backgroundImageUrl: 'linear-gradient(to right, #FA4098, #FFD77F)',
        startsAt: dayjs().subtract(1, 'days').toDate(),
        endsAt: dayjs().add(21, 'days').toDate(),
      },
    });
  }

  const tickets = await prisma.ticket.findMany();
  if (!tickets.some((ticket) => ticket.type === 'Online')) {
    await prisma.ticket.create({ data: { price: 100, type: 'Online' } });
  }
  if (!tickets.some((ticket) => ticket.type === 'Presential')) {
    await prisma.ticket.create({ data: { price: 250, type: 'Presential' } });
  }

  const accommodations = await prisma.accommodation.findMany();
  if (!accommodations.some((accommodation) => accommodation.type === 'Inn')) {
    await prisma.accommodation.create({ data: { price: 350, type: 'Inn' } });
  }
  if (!accommodations.some((accommodation) => accommodation.type === 'WithoutInn')) {
    await prisma.accommodation.create({ data: { price: 0, type: 'WithoutInn' } });
  }

  const existingHotels = await prisma.hotel.findMany();
  for (const name of hotelsName) {
    if (!existingHotels.some((existingHotel) => existingHotel.name === name)) {
      await prisma.hotel.create({ data: { name: name, imageUrl: 'https://source.unsplash.com/1600x900/?hotel' } });
    }
  }

  const existingRooms = await prisma.room.findMany();
  for (const roomNumber of roomNumbers) {
    for (const hotel of existingHotels) {
      if (
        !existingRooms.some((existingRoom) => existingRoom.number === roomNumber && existingRoom.hotelId === hotel.id)
      ) {
        const type = roomTypes[Math.floor(Math.random() * roomTypes.length)] as RoomType;
        await prisma.room.create({ data: { number: roomNumber, type: type, hotelId: hotel.id } });
      }
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
