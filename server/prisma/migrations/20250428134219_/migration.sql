/*
  Warnings:

  - The primary key for the `SinhVien` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `maSV` column on the `SinhVien` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "SinhVien" DROP CONSTRAINT "SinhVien_pkey",
DROP COLUMN "maSV",
ADD COLUMN     "maSV" SERIAL NOT NULL,
ADD CONSTRAINT "SinhVien_pkey" PRIMARY KEY ("maSV");
