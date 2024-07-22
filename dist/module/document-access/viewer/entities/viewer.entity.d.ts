import { Viewer } from '@prisma/client';
import { DocumentEntity } from 'src/module/document/entities/document.entity';
import { EndUserEntity } from 'src/module/users/enduser/entities/enduser.entity';
export declare class ViewerEntity implements Viewer {
    id: string;
    endUserId: string;
    documentId: string;
}
export declare class ViewerEntityPopulated extends ViewerEntity {
    document: DocumentEntity;
    endUser: EndUserEntity;
}
