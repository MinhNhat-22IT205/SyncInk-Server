/*
  Warnings:

  - You are about to drop the `DocumentUserAccess` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DocumentUserAccess" DROP CONSTRAINT "DocumentUserAccess_documentId_fkey";

-- DropForeignKey
ALTER TABLE "DocumentUserAccess" DROP CONSTRAINT "DocumentUserAccess_endUserId_fkey";

-- DropTable
DROP TABLE "DocumentUserAccess";

-- CreateTable
CREATE TABLE "DocumentAccess" (
    "id" TEXT NOT NULL,
    "endUserId" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "role" "DocumentRole" NOT NULL DEFAULT 'VIEWER',

    CONSTRAINT "DocumentAccess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DocumentAccess_endUserId_key" ON "DocumentAccess"("endUserId");

-- AddForeignKey
ALTER TABLE "DocumentAccess" ADD CONSTRAINT "DocumentAccess_endUserId_fkey" FOREIGN KEY ("endUserId") REFERENCES "EndUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentAccess" ADD CONSTRAINT "DocumentAccess_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
