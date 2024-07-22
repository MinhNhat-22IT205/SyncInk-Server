import { $Enums, Document } from '@prisma/client';
export declare class DocumentEntity implements Document {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    endUserId: string;
    publicAccess: $Enums.AccessType;
    createdAt: Date;
    updatedAt: Date;
}
