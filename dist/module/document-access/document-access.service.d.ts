import { DocumentAccess, DocumentRole } from '@prisma/client';
import { DocumentAccessRepository } from './repository/document-access.repository';
import { DocumentAccessPopulated } from './entities/document-access.entity';
import { DocumentEntity } from '../document/entities/document.entity';
import { DocumentService } from '../document/services/document.service';
export declare class DocumentAccessService {
    private readonly documentAccessRepository;
    private readonly documentService;
    constructor(documentAccessRepository: DocumentAccessRepository, documentService: DocumentService);
    checkAccessAndCreateDocumentAccess(documentId: string, endUserId: string, documentRole: DocumentRole, authUserId: string): Promise<DocumentAccess>;
    createDocumentAccess(documentId: string, endUserId: string, documentRole: DocumentRole): Promise<DocumentAccess>;
    checkAccessAndChangeDocumentAccess(documentId: string, endUserId: string, documentRole: DocumentRole, authUserId: string): Promise<DocumentAccess>;
    changeDocumentAccess(documentId: string, endUserId: string, documentRole: DocumentRole): Promise<DocumentAccess>;
    getViewersByDocumentId(documentId: string): Promise<DocumentAccessPopulated[]>;
    getEditorsByDocumentId(documentId: string): Promise<DocumentAccessPopulated[]>;
    checkAccessAndRemoveDocumentAccess(documentAccessId: string, authUserId: string): Promise<DocumentAccess>;
    removeDocumentAccess(documentAccessId: string): Promise<DocumentAccess>;
    canEdit(endUserId: string, document: DocumentEntity): Promise<boolean>;
    canView(endUserId: string, document: DocumentEntity): Promise<boolean>;
}
