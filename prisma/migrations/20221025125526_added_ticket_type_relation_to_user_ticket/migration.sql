/*
  Warnings:

  - Added the required column `ticketId` to the `UserTicket` table without a default value. This is not possible if the table is not empty.
  - Made the column `eventId` on table `UserTicket` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `UserTicket` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "UserTicket" DROP CONSTRAINT "UserTicket_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserTicket" DROP CONSTRAINT "UserTicket_userId_fkey";

-- AlterTable
ALTER TABLE "UserTicket" ADD COLUMN     "ticketId" INTEGER NOT NULL,
ALTER COLUMN "eventId" SET NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "UserTicket" ADD CONSTRAINT "UserTicket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTicket" ADD CONSTRAINT "UserTicket_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTicket" ADD CONSTRAINT "UserTicket_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
