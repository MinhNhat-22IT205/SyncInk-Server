/*
  Warnings:

  - A unique constraint covering the columns `[endUserId]` on the table `Editor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endUserId` to the `Editor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Editor" ADD COLUMN     "endUserId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Viewer" (
    "id" TEXT NOT NULL,
    "endUserId" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,

    CONSTRAINT "Viewer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Viewer_endUserId_key" ON "Viewer"("endUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Editor_endUserId_key" ON "Editor"("endUserId");

-- AddForeignKey
ALTER TABLE "Editor" ADD CONSTRAINT "Editor_endUserId_fkey" FOREIGN KEY ("endUserId") REFERENCES "EndUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viewer" ADD CONSTRAINT "Viewer_endUserId_fkey" FOREIGN KEY ("endUserId") REFERENCES "EndUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viewer" ADD CONSTRAINT "Viewer_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
