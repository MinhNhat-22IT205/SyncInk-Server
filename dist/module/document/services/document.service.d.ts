import { CreateDocumentDto } from '../dto/create-document.dto';
import { UpdateDocumentDto } from '../dto/update-document.dto';
import { DocumentRepository } from '../repository/document.repository';
import { DocumentEntity } from '../entities/document.entity';
import { DocumentAccessService } from 'src/module/document-access/document-access.service';
export declare class DocumentService {
    private readonly documentRepository;
    private readonly documentAccessService;
    constructor(documentRepository: DocumentRepository, documentAccessService: DocumentAccessService);
    createDocument(createDocumentDto: CreateDocumentDto, endUserId: string): Promise<DocumentEntity>;
    getDocumentsByUserId(endUserId: string): Promise<DocumentEntity[]>;
    checkAccessAndGetDocumentById(documentId: string, endUserId: string): Promise<DocumentEntity>;
    getDocumentById(documentId: string): Promise<DocumentEntity>;
    checkAccessAndUpdateDocument(updateDocumentDto: UpdateDocumentDto, documentId: string, endUserId: string): Promise<DocumentEntity>;
    checkAccessAndDeleteDocument(documentId: string, endUserId: string): Promise<DocumentEntity>;
}
