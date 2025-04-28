/*
  Warnings:

  - You are about to drop the column `lop` on the `SinhVien` table. All the data in the column will be lost.
  - Added the required column `maLopId` to the `SinhVien` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SinhVien" DROP COLUMN "lop",
ADD COLUMN     "maLopId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Lop" (
    "maLop" SERIAL NOT NULL,
    "tenLop" TEXT NOT NULL,
    "soSV" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lop_pkey" PRIMARY KEY ("maLop")
);

-- AddForeignKey
ALTER TABLE "SinhVien" ADD CONSTRAINT "SinhVien_maLopId_fkey" FOREIGN KEY ("maLopId") REFERENCES "Lop"("maLop") ON DELETE CASCADE ON UPDATE CASCADE;
