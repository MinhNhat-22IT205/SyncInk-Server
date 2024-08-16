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

@WebSocketGateway({ cors: true })
export class DocumentEditGateway {
  constructor(private documentService: DocumentService) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(@MessageBody() body: JoinRoomDto, @ConnectedSocket() client: Socket) {
    const isAlreadyJoined = client.rooms.has(body.documentId);
    if (!isAlreadyJoined) {
      return;
    }
    client.leave(body.documentId);
  }

  @SubscribeMessage('load-document-content')
  async handleGetDocumentContentAndJoinRoom(
    @MessageBody() body: JoinRoomDto,
    @ConnectedSocket() client: Socket,
  ) {
    console.log('body' + body);
    const isAlreadyJoined = client.rooms.has(body.documentId);
    if (isAlreadyJoined) {
      return;
    }
    const document = await this.documentService.checkAccessAndGetDocumentById(
      body.documentId,
      body.endUserId,
    );
    console.log('document' + JSON.stringify(document));
    client.join(body.documentId);
    this.server.emit('receive-load-document-content', { content: document.content });
  }
  @SubscribeMessage('save-document')
  async handleSaveDocumentContent(
    @MessageBody() body: { documentId: string; content: string; endUserId: string },
  ) {
    await this.documentService.checkAccessAndUpdateDocument(
      { content: body.content },
      body.documentId,
      body.endUserId,
    );
  }
  @SubscribeMessage('send-changes')
  async handleEditDocumentContent(
    @MessageBody() body: EditDocumentContentDto,
    @ConnectedSocket() client: Socket,
  ) {
    console.log('text change');
    this.server
      .to(body.documentId)
      .except(client.id)
      .emit('receive-changes', { content: body.content });
  }
}
