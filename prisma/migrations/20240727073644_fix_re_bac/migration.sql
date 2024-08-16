/*
  Warnings:

  - The values [EDITABLE,VIEWABLE,RESTRICTED] on the enum `AccessType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `Editor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Viewer` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "DocumentRole" AS ENUM ('EDITOR', 'VIEWER');

-- AlterEnum
BEGIN;
CREATE TYPE "AccessType_new" AS ENUM ('ALL_EDITABLE', 'ALL_VIEWABLE', 'USER_RESTRICTED', 'PRIVATE');
ALTER TABLE "Document" ALTER COLUMN "publicAccess" DROP DEFAULT;
ALTER TABLE "Document" ALTER COLUMN "publicAccess" TYPE "AccessType_new" USING ("publicAccess"::text::"AccessType_new");
ALTER TYPE "AccessType" RENAME TO "AccessType_old";
ALTER TYPE "AccessType_new" RENAME TO "AccessType";
DROP TYPE "AccessType_old";
ALTER TABLE "Document" ALTER COLUMN "publicAccess" SET DEFAULT 'PRIVATE';
COMMIT;

-- DropForeignKey
ALTER TABLE "Editor" DROP CONSTRAINT "Editor_documentId_fkey";

-- DropForeignKey
ALTER TABLE "Editor" DROP CONSTRAINT "Editor_endUserId_fkey";

-- DropForeignKey
ALTER TABLE "Viewer" DROP CONSTRAINT "Viewer_documentId_fkey";

-- DropForeignKey
ALTER TABLE "Viewer" DROP CONSTRAINT "Viewer_endUserId_fkey";

-- AlterTable
ALTER TABLE "Document" ALTER COLUMN "publicAccess" SET DEFAULT 'PRIVATE';

-- DropTable
DROP TABLE "Editor";

-- DropTable
DROP TABLE "Viewer";

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
