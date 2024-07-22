import { CreateDocumentDto } from '../dto/create-document.dto';
import { UpdateDocumentDto } from '../dto/update-document.dto';
import { DocumentRepository } from '../repository/document.repository';
import { DocumentEntity } from '../entities/document.entity';
import { EditorService } from 'src/module/document-access/editor/editor.service';
import { SetDocumentAccessTypeDto } from '../dto/set-document-access';
import { ViewerService } from 'src/module/document-access/viewer/viewer.service';
export declare class DocumentService {
    private readonly documentRepository;
    private readonly editorService;
    private readonly viewerService;
    constructor(documentRepository: DocumentRepository, editorService: EditorService, viewerService: ViewerService);
    createDocument(createDocumentDto: CreateDocumentDto, endUserId: string): Promise<DocumentEntity>;
    getDocumentsByUserId(endUserId: string): Promise<DocumentEntity[]>;
    getDocumentById(documentId: string, endUserId: string): Promise<DocumentEntity>;
    updateDocument(updateDocumentDto: UpdateDocumentDto, documentId: string, endUserId: string): Promise<DocumentEntity>;
    deleteDocument(documentId: string, endUserId: string): Promise<DocumentEntity>;
    setDocumentAccessType(updateDocumentAccessTypeDto: SetDocumentAccessTypeDto, documentId: string, endUserId: string): Promise<DocumentEntity>;
    isDocumentBelongsToUser(documentId: string, endUserId: string): Promise<boolean>;
    isDocumentEditor(endUserId: string, documentId: string): Promise<boolean>;
    isDocumentViewer(endUserId: string, documentId: string): Promise<boolean>;
}
