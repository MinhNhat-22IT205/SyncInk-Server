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
exports.EditorController = void 0;
const common_1 = require("@nestjs/common");
const editor_service_1 = require("./editor.service");
const create_editor_dto_1 = require("./dto/create-editor.dto");
const swagger_1 = require("@nestjs/swagger");
const editor_entity_1 = require("./entities/editor.entity");
const jwt_auth_guard_1 = require("../../auth/strategy/jwt-auth.guard");
const get_editors_of_document_dto_1 = require("./dto/get-editors-of-document.dto");
const serialize_interceptor_1 = require("../../../core/interceptor/serialize.interceptor");
let EditorController = class EditorController {
    constructor(editorService) {
        this.editorService = editorService;
    }
    create(addEditorDto) {
        return this.editorService.addEditor(addEditorDto);
    }
    getEditorsFromDocumentId(getDocumentEditorsDto) {
        return this.editorService.getEditorsFromDocumentId(getDocumentEditorsDto);
    }
    findOne(id) {
        return this.editorService.getEditorById({ editorId: id });
    }
    remove(id) {
        return this.editorService.removeEditorById({ editorId: id });
    }
};
exports.EditorController = EditorController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: editor_entity_1.EditorEntity }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_editor_dto_1.AddEditorDto]),
    __metadata("design:returntype", void 0)
], EditorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, serialize_interceptor_1.UseSerializeInterceptor)(editor_entity_1.EditorEntityPopulated),
    (0, swagger_1.ApiCreatedResponse)({ type: editor_entity_1.EditorEntityPopulated }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_editors_of_document_dto_1.getDocumentEditorsDto]),
    __metadata("design:returntype", void 0)
], EditorController.prototype, "getEditorsFromDocumentId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EditorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EditorController.prototype, "remove", null);
exports.EditorController = EditorController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('editors'),
    (0, swagger_1.ApiTags)('editors'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [editor_service_1.EditorService])
], EditorController);
//# sourceMappingURL=editor.controller.js.map