/*
  Warnings:

  - Added the required column `accommodationId` to the `UserTicket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserTicket" ADD COLUMN     "accommodationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserTicket" ADD CONSTRAINT "UserTicket_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "Accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
