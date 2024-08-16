/*
  Warnings:

  - The `publicAccess` column on the `Document` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PublicDocumentAccessType" AS ENUM ('ALL_EDITABLE', 'ALL_VIEWABLE', 'USER_RESTRICTED', 'PRIVATE');

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "publicAccess",
ADD COLUMN     "publicAccess" "PublicDocumentAccessType" NOT NULL DEFAULT 'PRIVATE';

-- DropEnum
DROP TYPE "AccessType";
