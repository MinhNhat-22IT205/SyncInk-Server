import { EndUserMinimal } from 'src/module/users/enduser/entities/enduser.entity';
import { DocumentAccessService } from './document-access.service';
import { DocumentAccessPopulated } from './entities/document-access.entity';
import { ChangeDocumentAccessDto } from './dto/change-document-access.dto';
import { DocumentIdDto } from './dto/documentId.dto';
import { CreateDocumentAccessDto } from './dto/create-document-access.dto';
export declare class DocumentAccessController {
    private readonly documentAccessService;
    constructor(documentAccessService: DocumentAccessService);
    createDocumentAccess(createDocumentAccessDto: CreateDocumentAccessDto, endUser: EndUserMinimal): Promise<{
        id: string;
        endUserId: string;
        documentId: string;
        role: import("@prisma/client").$Enums.DocumentRole;
    }>;
    changeDocumentAccess(changeDocumentAccessDto: ChangeDocumentAccessDto, endUser: EndUserMinimal): Promise<{
        id: string;
        endUserId: string;
        documentId: string;
        role: import("@prisma/client").$Enums.DocumentRole;
    }>;
    getViewersByDocumentId(getDocumentAccessDto: DocumentIdDto): Promise<DocumentAccessPopulated[]>;
    getEditorsByDocumentId(getDocumentAccessDto: DocumentIdDto): Promise<DocumentAccessPopulated[]>;
    removeDocumentAccess(documentAccessId: string, endUser: EndUserMinimal): Promise<{
        id: string;
        endUserId: string;
        documentId: string;
        role: import("@prisma/client").$Enums.DocumentRole;
    }>;
}
