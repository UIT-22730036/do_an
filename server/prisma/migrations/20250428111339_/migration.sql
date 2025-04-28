-- CreateTable
CREATE TABLE "SinhVien" (
    "maSV" TEXT NOT NULL,
    "tenSV" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "lop" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SinhVien_pkey" PRIMARY KEY ("maSV")
);

-- CreateIndex
CREATE UNIQUE INDEX "SinhVien_email_key" ON "SinhVien"("email");
