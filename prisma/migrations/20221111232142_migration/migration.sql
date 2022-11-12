-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "originalTitle" TEXT NOT NULL,
    "description" TEXT,
    "score" INTEGER,
    "releaseDate" TIMESTAMP(3),

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);
