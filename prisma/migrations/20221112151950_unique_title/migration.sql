/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Movie_title_unique_constraint" ON "Movie"("title");
