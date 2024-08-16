import { $Enums, DocumentAccess } from '@prisma/client';
import { DocumentEntity } from 'src/module/document/entities/document.entity';
import { EndUserEntity } from 'src/module/users/enduser/entities/enduser.entity';
export declare class DocumentAccessEntity implements DocumentAccess {
    id: string;
    endUserId: string;
    documentId: string;
    role: $Enums.DocumentRole;
}
export declare class DocumentAccessPopulated extends DocumentAccessEntity {
    endUser: EndUserEntity;
    document?: DocumentEntity;
}
