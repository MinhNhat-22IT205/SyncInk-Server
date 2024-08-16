import { Server, Socket } from 'socket.io';
import { DocumentService } from '../document/services/document.service';
import { EditDocumentContentDto } from './dto/edit-document-content.dto';
import { JoinRoomDto } from './dto/join-room.dto';
export declare class DocumentEditGateway {
    private documentService;
    constructor(documentService: DocumentService);
    server: Server;
    handleLeaveRoom(body: JoinRoomDto, client: Socket): void;
    handleGetDocumentContentAndJoinRoom(body: JoinRoomDto, client: Socket): Promise<void>;
    handleSaveDocumentContent(body: {
        documentId: string;
        content: string;
        endUserId: string;
    }): Promise<void>;
    handleEditDocumentContent(body: EditDocumentContentDto, client: Socket): Promise<void>;
}
