-- CreateTable
CREATE TABLE "Hotel" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);
