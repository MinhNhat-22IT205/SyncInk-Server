import { DocumentRole } from '@prisma/client';
export declare class CreateDocumentAccessDto {
    documentId: string;
    endUserId: string;
    documentRole: DocumentRole;
}
