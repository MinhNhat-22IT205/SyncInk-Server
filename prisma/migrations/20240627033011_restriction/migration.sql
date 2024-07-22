-- CreateTable
CREATE TABLE "Editor" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,

    CONSTRAINT "Editor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Editor" ADD CONSTRAINT "Editor_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
