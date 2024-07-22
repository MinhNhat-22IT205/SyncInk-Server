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
exports.EditorService = void 0;
const common_1 = require("@nestjs/common");
const editor_repository_1 = require("./repository/editor.repository");
let EditorService = class EditorService {
    constructor(editorRepository) {
        this.editorRepository = editorRepository;
    }
    async addEditor(addEditorDto) {
        return this.editorRepository.create(addEditorDto);
    }
    async getEditorsFromDocumentId(getDocumentEditorsDto) {
        return this.editorRepository.findMany({
            where: { documentId: getDocumentEditorsDto.documentId },
            include: { document: true, endUser: true },
        });
    }
    async getEditorById(getEditorDto) {
        return this.editorRepository.findById(getEditorDto.editorId);
    }
    async removeEditorById(removeEditorDto) {
        return this.editorRepository.delete(removeEditorDto.editorId);
    }
};
exports.EditorService = EditorService;
exports.EditorService = EditorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [editor_repository_1.EditorRepository])
], EditorService);
//# sourceMappingURL=editor.service.js.map