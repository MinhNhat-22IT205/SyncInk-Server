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
CREATE TABLE "DocumentUserAccess" (
    "id" TEXT NOT NULL,
    "endUserId" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "role" "DocumentRole" NOT NULL DEFAULT 'VIEWER',

    CONSTRAINT "DocumentUserAccess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DocumentUserAccess_endUserId_key" ON "DocumentUserAccess"("endUserId");

-- AddForeignKey
ALTER TABLE "DocumentUserAccess" ADD CONSTRAINT "DocumentUserAccess_endUserId_fkey" FOREIGN KEY ("endUserId") REFERENCES "EndUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentUserAccess" ADD CONSTRAINT "DocumentUserAccess_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
