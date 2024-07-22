import { Server, Socket } from 'socket.io';
import { DocumentService } from '../document/services/document.service';
import { EditDocumentContentDto } from './dto/edit-document-content.dto';
import { JoinRoomDto } from './dto/join-room.dto';
export declare class DocumentEditGateway {
    private documentService;
    constructor(documentService: DocumentService);
    server: Server;
    handleJoinRoom(body: JoinRoomDto, client: Socket): void;
    handleLeaveRoom(body: JoinRoomDto, client: Socket): void;
    handleEditDocumentContent(body: EditDocumentContentDto): Promise<void>;
}
