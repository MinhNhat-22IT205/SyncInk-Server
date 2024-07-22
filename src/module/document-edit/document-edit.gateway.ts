import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { DocumentService } from '../document/services/document.service';
import { EditDocumentContentDto } from './dto/edit-document-content.dto';
import { JoinRoomDto } from './dto/join-room.dto';

@WebSocketGateway()
export class DocumentEditGateway {
  constructor(private documentService: DocumentService) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('joinRoom')
  handleJoinRoom(@MessageBody() body: JoinRoomDto, @ConnectedSocket() client: Socket) {
    const isAlreadyJoined = client.rooms.has(body.documentId);
    if (isAlreadyJoined) {
      return;
    }
    client.join(body.documentId);
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(@MessageBody() body: JoinRoomDto, @ConnectedSocket() client: Socket) {
    const isAlreadyJoined = client.rooms.has(body.documentId);
    if (!isAlreadyJoined) {
      return;
    }
    client.leave(body.documentId);
  }

  @SubscribeMessage('editContent')
  async handleEditDocumentContent(@MessageBody() body: EditDocumentContentDto) {
    //1. Check restriction & create
    const editedDocument = await this.documentService.updateDocument(
      { content: body.content },
      body.documentId,
      body.endUserId,
    );
    //2. Send content to all clients in the room
    this.server.to(body.documentId).emit('receiveContent', { content: editedDocument.content });
  }
}
