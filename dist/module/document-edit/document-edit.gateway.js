"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentEditGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const document_service_1 = require("../document/services/document.service");
const edit_document_content_dto_1 = require("./dto/edit-document-content.dto");
const join_room_dto_1 = require("./dto/join-room.dto");
let DocumentEditGateway = class DocumentEditGateway {
    constructor(documentService) {
        this.documentService = documentService;
    }
    handleLeaveRoom(body, client) {
        const isAlreadyJoined = client.rooms.has(body.documentId);
        if (!isAlreadyJoined) {
            return;
        }
        client.leave(body.documentId);
    }
    async handleGetDocumentContentAndJoinRoom(body, client) {
        console.log('body' + body);
        const isAlreadyJoined = client.rooms.has(body.documentId);
        if (isAlreadyJoined) {
            return;
        }
        const document = await this.documentService.checkAccessAndGetDocumentById(body.documentId, body.endUserId);
        console.log('document' + JSON.stringify(document));
        client.join(body.documentId);
        this.server.emit('receive-load-document-content', { content: document.content });
    }
    async handleSaveDocumentContent(body) {
        await this.documentService.checkAccessAndUpdateDocument({ content: body.content }, body.documentId, body.endUserId);
    }
    async handleEditDocumentContent(body, client) {
        console.log('text change');
        this.server
            .to(body.documentId)
            .except(client.id)
            .emit('receive-changes', { content: body.content });
    }
};
exports.DocumentEditGateway = DocumentEditGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], DocumentEditGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('leaveRoom'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [join_room_dto_1.JoinRoomDto, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], DocumentEditGateway.prototype, "handleLeaveRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('load-document-content'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [join_room_dto_1.JoinRoomDto,
        socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], DocumentEditGateway.prototype, "handleGetDocumentContentAndJoinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('save-document'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentEditGateway.prototype, "handleSaveDocumentContent", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('send-changes'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_document_content_dto_1.EditDocumentContentDto,
        socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], DocumentEditGateway.prototype, "handleEditDocumentContent", null);
exports.DocumentEditGateway = DocumentEditGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [document_service_1.DocumentService])
], DocumentEditGateway);
//# sourceMappingURL=document-edit.gateway.js.map