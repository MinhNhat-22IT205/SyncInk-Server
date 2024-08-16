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
exports.DocumentAccessController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/strategy/jwt-auth.guard");
const enduser_entity_1 = require("../users/enduser/entities/enduser.entity");
const document_access_service_1 = require("./document-access.service");
const document_access_entity_1 = require("./entities/document-access.entity");
const change_document_access_dto_1 = require("./dto/change-document-access.dto");
const documentId_dto_1 = require("./dto/documentId.dto");
const create_document_access_dto_1 = require("./dto/create-document-access.dto");
const get_user_decorator_1 = require("../../shared/decorators/get-user.decorator");
let DocumentAccessController = class DocumentAccessController {
    constructor(documentAccessService) {
        this.documentAccessService = documentAccessService;
    }
    async createDocumentAccess(createDocumentAccessDto, endUser) {
        const { documentId, endUserId, documentRole } = createDocumentAccessDto;
        return this.documentAccessService.checkAccessAndCreateDocumentAccess(documentId, endUserId, documentRole, endUser.id);
    }
    async changeDocumentAccess(changeDocumentAccessDto, endUser) {
        const { documentId, endUserId, documentRole } = changeDocumentAccessDto;
        return this.documentAccessService.checkAccessAndChangeDocumentAccess(documentId, endUserId, documentRole, endUser.id);
    }
    async getViewersByDocumentId(getDocumentAccessDto) {
        const { documentId } = getDocumentAccessDto;
        return this.documentAccessService.getViewersByDocumentId(documentId);
    }
    async getEditorsByDocumentId(getDocumentAccessDto) {
        const { documentId } = getDocumentAccessDto;
        return this.documentAccessService.getEditorsByDocumentId(documentId);
    }
    async removeDocumentAccess(documentAccessId, endUser) {
        return this.documentAccessService.checkAccessAndRemoveDocumentAccess(documentAccessId, endUser.id);
    }
};
exports.DocumentAccessController = DocumentAccessController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: document_access_entity_1.DocumentAccessEntity }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_document_access_dto_1.CreateDocumentAccessDto,
        enduser_entity_1.EndUserMinimal]),
    __metadata("design:returntype", Promise)
], DocumentAccessController.prototype, "createDocumentAccess", null);
__decorate([
    (0, common_1.Patch)(),
    (0, swagger_1.ApiCreatedResponse)({ type: document_access_entity_1.DocumentAccessEntity }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_document_access_dto_1.ChangeDocumentAccessDto,
        enduser_entity_1.EndUserMinimal]),
    __metadata("design:returntype", Promise)
], DocumentAccessController.prototype, "changeDocumentAccess", null);
__decorate([
    (0, common_1.Get)('viewers'),
    (0, swagger_1.ApiCreatedResponse)({ type: [document_access_entity_1.DocumentAccessPopulated] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [documentId_dto_1.DocumentIdDto]),
    __metadata("design:returntype", Promise)
], DocumentAccessController.prototype, "getViewersByDocumentId", null);
__decorate([
    (0, common_1.Get)('editors'),
    (0, swagger_1.ApiCreatedResponse)({ type: [document_access_entity_1.DocumentAccessPopulated] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [documentId_dto_1.DocumentIdDto]),
    __metadata("design:returntype", Promise)
], DocumentAccessController.prototype, "getEditorsByDocumentId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiCreatedResponse)({ type: document_access_entity_1.DocumentAccessEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, get_user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, enduser_entity_1.EndUserMinimal]),
    __metadata("design:returntype", Promise)
], DocumentAccessController.prototype, "removeDocumentAccess", null);
exports.DocumentAccessController = DocumentAccessController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('document-access'),
    (0, swagger_1.ApiTags)('document-access'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [document_access_service_1.DocumentAccessService])
], DocumentAccessController);
//# sourceMappingURL=document-access.controller.js.map