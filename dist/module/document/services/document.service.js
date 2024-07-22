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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentService = void 0;
const common_1 = require("@nestjs/common");
const document_repository_1 = require("../repository/document.repository");
const document_access_type_constant_1 = require("../../../shared/constants/document-access-type.constant");
const editor_service_1 = require("../../document-access/editor/editor.service");
const viewer_service_1 = require("../../document-access/viewer/viewer.service");
let DocumentService = class DocumentService {
    constructor(documentRepository, editorService, viewerService) {
        this.documentRepository = documentRepository;
        this.editorService = editorService;
        this.viewerService = viewerService;
    }
    async createDocument(createDocumentDto, endUserId) {
        return this.documentRepository.create({ ...createDocumentDto, endUserId });
    }
    async getDocumentsByUserId(endUserId) {
        return this.documentRepository.findMany({ where: { endUserId: endUserId } });
    }
    async getDocumentById(documentId, endUserId) {
        const document = await this.documentRepository.findOne({ where: { id: documentId } });
        if (!document) {
            throw new common_1.NotFoundException('Document not found');
        }
        const isOwner = document.endUserId === endUserId;
        if (isOwner) {
            return document;
        }
        if (document.publicAccess === document_access_type_constant_1.DOCUMENT_ACCESS_TYPE.RESTRICTED) {
            const isViewer = await this.isDocumentViewer(endUserId, documentId);
            if (!isViewer) {
                throw new common_1.UnauthorizedException('You are not allowed for viewing this document');
            }
        }
        return document;
    }
    async updateDocument(updateDocumentDto, documentId, endUserId) {
        const requestedDocument = await this.documentRepository.findOne({ where: { id: documentId } });
        const isCreator = requestedDocument.endUserId === endUserId;
        if (!isCreator) {
            if (requestedDocument.publicAccess !== document_access_type_constant_1.DOCUMENT_ACCESS_TYPE.EDITABLE &&
                requestedDocument.publicAccess !== document_access_type_constant_1.DOCUMENT_ACCESS_TYPE.RESTRICTED) {
                throw new common_1.UnauthorizedException('You are not allowed for editing this document');
            }
            const isEditor = await this.isDocumentEditor(endUserId, documentId);
            if (!isEditor) {
                throw new common_1.UnauthorizedException('You are not allowed for editing this document');
            }
        }
        return this.documentRepository.update({
            data: {
                content: updateDocumentDto.content + requestedDocument.content,
                ...updateDocumentDto,
            },
            where: { id: documentId },
        });
    }
    async deleteDocument(documentId, endUserId) {
        const isDocumentBelongsToUser = await this.isDocumentBelongsToUser(documentId, endUserId);
        if (!isDocumentBelongsToUser) {
            throw new common_1.UnauthorizedException('You are not allowed for editing this document');
        }
        return this.documentRepository.delete(documentId);
    }
    async setDocumentAccessType(updateDocumentAccessTypeDto, documentId, endUserId) {
        const isDocumentBelongsToUser = await this.isDocumentBelongsToUser(documentId, endUserId);
        if (!isDocumentBelongsToUser) {
            throw new common_1.UnauthorizedException('You are not allowed for editing this document');
        }
        return this.documentRepository.update({
            data: { publicAccess: updateDocumentAccessTypeDto.documentAccessType },
            where: { id: documentId },
        });
    }
    async isDocumentBelongsToUser(documentId, endUserId) {
        const document = await this.documentRepository.findOne({ where: { id: documentId } });
        return document.endUserId === endUserId;
    }
    async isDocumentEditor(endUserId, documentId) {
        const editors = await this.editorService.getEditorsFromDocumentId({ documentId });
        const isEditor = editors.some(editor => editor.endUserId === endUserId);
        return isEditor;
    }
    async isDocumentViewer(endUserId, documentId) {
        const viewers = await this.viewerService.getViewersFromDocumentId({ documentId });
        const isViewer = viewers.some(viewer => viewer.endUserId === endUserId);
        return isViewer;
    }
};
exports.DocumentService = DocumentService;
exports.DocumentService = DocumentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [document_repository_1.DocumentRepository,
        editor_service_1.EditorService,
        viewer_service_1.ViewerService])
], DocumentService);
//# sourceMappingURL=document.service.js.map