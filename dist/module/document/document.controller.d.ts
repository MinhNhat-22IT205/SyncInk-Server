import { DocumentService } from './services/document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { DocumentEntity } from './entities/document.entity';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { EndUserMinimal } from '../users/enduser/entities/enduser.entity';
import { SetDocumentAccessTypeDto } from './dto/set-document-access';
export declare class DocumentController {
    private readonly documentService;
    constructor(documentService: DocumentService);
    create(createDocumentDto: CreateDocumentDto, endUser: EndUserMinimal): Promise<DocumentEntity>;
    getUsersDocuments(endUser: EndUserMinimal): Promise<DocumentEntity[]>;
    getDocument(id: string, endUser: EndUserMinimal): Promise<DocumentEntity>;
    setDocumentAccessType(id: string, setDocumentAccessTypeDto: SetDocumentAccessTypeDto, endUser: EndUserMinimal): Promise<DocumentEntity>;
    updateDocument(id: string, updateDocumentDto: UpdateDocumentDto, endUser: EndUserMinimal): Promise<DocumentEntity>;
    removeDocument(id: string, endUser: EndUserMinimal): Promise<DocumentEntity>;
}
