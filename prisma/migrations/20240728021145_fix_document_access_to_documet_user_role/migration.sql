/*
  Warnings:

  - You are about to drop the `DocumentAccess` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DocumentAccess" DROP CONSTRAINT "DocumentAccess_documentId_fkey";

-- DropForeignKey
ALTER TABLE "DocumentAccess" DROP CONSTRAINT "DocumentAccess_endUserId_fkey";

-- DropTable
DROP TABLE "DocumentAccess";

-- CreateTable
CREATE TABLE "DocumentUserRole" (
    "id" TEXT NOT NULL,
    "endUserId" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "role" "DocumentRole" NOT NULL DEFAULT 'VIEWER',

    CONSTRAINT "DocumentUserRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DocumentUserRole_endUserId_key" ON "DocumentUserRole"("endUserId");

-- AddForeignKey
ALTER TABLE "DocumentUserRole" ADD CONSTRAINT "DocumentUserRole_endUserId_fkey" FOREIGN KEY ("endUserId") REFERENCES "EndUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentUserRole" ADD CONSTRAINT "DocumentUserRole_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
