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
exports.DocumentAccessService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const document_access_repository_1 = require("./repository/document-access.repository");
const document_service_1 = require("../document/services/document.service");
let DocumentAccessService = class DocumentAccessService {
    constructor(documentAccessRepository, documentService) {
        this.documentAccessRepository = documentAccessRepository;
        this.documentService = documentService;
    }
    async checkAccessAndCreateDocumentAccess(documentId, endUserId, documentRole, authUserId) {
        const document = await this.documentService.getDocumentById(documentId);
        const canEdit = await this.canEdit(authUserId, document);
        if (!canEdit) {
            throw new Error('You are not allowed to edit this document');
        }
        return this.createDocumentAccess(documentId, endUserId, documentRole);
    }
    async createDocumentAccess(documentId, endUserId, documentRole) {
        const documentAccess = await this.documentAccessRepository.create({
            documentId,
            endUserId,
            role: documentRole,
        });
        return documentAccess;
    }
    async checkAccessAndChangeDocumentAccess(documentId, endUserId, documentRole, authUserId) {
        const document = await this.documentService.getDocumentById(documentId);
        const canEdit = await this.canEdit(authUserId, document);
        if (!canEdit) {
            throw new Error('You are not allowed to edit this document');
        }
        return this.changeDocumentAccess(documentId, endUserId, documentRole);
    }
    async changeDocumentAccess(documentId, endUserId, documentRole) {
        return this.documentAccessRepository.update({
            where: { documentId, endUserId },
            data: { role: documentRole },
        });
    }
    async getViewersByDocumentId(documentId) {
        return this.documentAccessRepository.findMany({
            where: { documentId, role: client_1.DocumentRole.VIEWER },
            include: { endUser: true },
        });
    }
    async getEditorsByDocumentId(documentId) {
        return this.documentAccessRepository.findMany({
            where: { documentId, role: client_1.DocumentRole.EDITOR },
            include: { endUser: true },
        });
    }
    async checkAccessAndRemoveDocumentAccess(documentAccessId, authUserId) {
        const documentAccess = await this.documentAccessRepository.findOne({
            where: { id: documentAccessId },
            include: { document: true },
        });
        if (!documentAccess) {
            throw new Error('Document access not found');
        }
        const document = documentAccess.document;
        const canEdit = await this.canEdit(authUserId, document);
        if (!canEdit) {
            throw new Error('You are not allowed to edit this document');
        }
        return this.removeDocumentAccess(documentAccessId);
    }
    async removeDocumentAccess(documentAccessId) {
        return this.documentAccessRepository.delete(documentAccessId);
    }
    async canEdit(endUserId, document) {
        const isOwner = document.endUserId === endUserId;
        if (isOwner) {
            return true;
        }
        const documentAccess = await this.documentAccessRepository.findOne({
            where: { documentId: document.id, endUserId },
        });
        if (!documentAccess) {
            if (document.publicAccess === client_1.PublicDocumentAccessType.ALL_EDITABLE) {
                return true;
            }
            return false;
        }
        const isEditor = documentAccess.role === client_1.DocumentRole.EDITOR;
        return isEditor;
    }
    async canView(endUserId, document) {
        const isOwner = document.endUserId === endUserId;
        if (isOwner) {
            return true;
        }
        const documentAccess = await this.documentAccessRepository.findOne({
            where: { documentId: document.id, endUserId },
        });
        if (!documentAccess) {
            if (document.publicAccess === client_1.PublicDocumentAccessType.ALL_VIEWABLE ||
                document.publicAccess === client_1.PublicDocumentAccessType.ALL_EDITABLE) {
                return true;
            }
            return false;
        }
        const isViewerOrEditor = documentAccess.role === client_1.DocumentRole.VIEWER || documentAccess.role === client_1.DocumentRole.EDITOR;
        return isViewerOrEditor;
    }
};
exports.DocumentAccessService = DocumentAccessService;
exports.DocumentAccessService = DocumentAccessService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => document_service_1.DocumentService))),
    __metadata("design:paramtypes", [document_access_repository_1.DocumentAccessRepository,
        document_service_1.DocumentService])
], DocumentAccessService);
//# sourceMappingURL=document-access.service.js.map