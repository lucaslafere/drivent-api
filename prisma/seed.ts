import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
const prisma = new PrismaClient();

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

  const tickets = await prisma.ticket.findMany()
  if(!tickets.some(ticket => ticket.type === 'Online')) {
    await prisma.ticket.create({data: {price: 250, type: 'Online'}})
  }
  if(!tickets.some(ticket => ticket.type === 'Presential')) {
    await prisma.ticket.create({data: {price: 100, type: 'Presential'}})
  }

  const accommodations = await prisma.accommodation.findMany()
  if(!accommodations.some(accommodation => accommodation.type === 'Inn')) {
    await prisma.accommodation.create({data: {price: 350, type: 'Inn'}})
  }
  if(!accommodations.some(accommodation => accommodation.type === 'WithoutInn')) {
    await prisma.accommodation.create({data: {price: 0, type: 'WithoutInn'}})
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
