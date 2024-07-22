-- CreateEnum
CREATE TYPE "AccessType" AS ENUM ('EDITABLE', 'VIEWABLE', 'RESTRICTED');

-- AlterTable
ALTER TABLE "EndUser" ALTER COLUMN "avatar" SET DEFAULT '',
ALTER COLUMN "description" SET DEFAULT '';

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "content" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL DEFAULT '',
    "endUserId" TEXT NOT NULL,
    "publicAccess" "AccessType" NOT NULL DEFAULT 'RESTRICTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_endUserId_fkey" FOREIGN KEY ("endUserId") REFERENCES "EndUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
