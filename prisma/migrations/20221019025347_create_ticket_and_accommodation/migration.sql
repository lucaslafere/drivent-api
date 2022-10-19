-- CreateEnum
CREATE TYPE "TicketType" AS ENUM ('Presential', 'Online');

-- CreateEnum
CREATE TYPE "AccommodationType" AS ENUM ('Inn', 'WithoutInn');

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "type" "TicketType" NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Accommodation" (
    "id" SERIAL NOT NULL,
    "type" "AccommodationType" NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Accommodation_pkey" PRIMARY KEY ("id")
);
