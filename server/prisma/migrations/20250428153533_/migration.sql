/*
  Warnings:

  - A unique constraint covering the columns `[tenLop]` on the table `Lop` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Lop_tenLop_key" ON "Lop"("tenLop");
