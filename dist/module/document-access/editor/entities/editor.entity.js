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
exports.EditorEntityPopulated = exports.EditorEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const document_entity_1 = require("../../../document/entities/document.entity");
const enduser_entity_1 = require("../../../users/enduser/entities/enduser.entity");
class EditorEntity {
}
exports.EditorEntity = EditorEntity;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], EditorEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], EditorEntity.prototype, "endUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], EditorEntity.prototype, "documentId", void 0);
class EditorEntityPopulated extends EditorEntity {
}
exports.EditorEntityPopulated = EditorEntityPopulated;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => enduser_entity_1.EndUserEntity),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", enduser_entity_1.EndUserEntity)
], EditorEntityPopulated.prototype, "endUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => document_entity_1.DocumentEntity),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", document_entity_1.DocumentEntity)
], EditorEntityPopulated.prototype, "document", void 0);
//# sourceMappingURL=editor.entity.js.map