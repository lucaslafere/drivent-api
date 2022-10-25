-- CreateTable
CREATE TABLE "RoomUserTicket" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roomId" INTEGER NOT NULL,
    "userTicketId" INTEGER NOT NULL,

    CONSTRAINT "RoomUserTicket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoomUserTicket" ADD CONSTRAINT "RoomUserTicket_userTicketId_fkey" FOREIGN KEY ("userTicketId") REFERENCES "UserTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomUserTicket" ADD CONSTRAINT "RoomUserTicket_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
