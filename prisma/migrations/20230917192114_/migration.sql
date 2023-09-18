-- CreateTable
CREATE TABLE "characters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "type" TEXT,
    "gender" TEXT NOT NULL,
    "originName" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "episode" TEXT[],
    "url" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);
