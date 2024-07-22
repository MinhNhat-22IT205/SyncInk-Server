import { Editor } from '@prisma/client';
import { DocumentEntity } from 'src/module/document/entities/document.entity';
import { EndUserEntity } from 'src/module/users/enduser/entities/enduser.entity';
export declare class EditorEntity implements Editor {
    id: string;
    endUserId: string;
    documentId: string;
}
export declare class EditorEntityPopulated extends EditorEntity {
    endUser: EndUserEntity;
    document: DocumentEntity;
}
