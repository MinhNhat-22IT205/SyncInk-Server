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
exports.CreateDocumentAccessDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class CreateDocumentAccessDto {
}
exports.CreateDocumentAccessDto = CreateDocumentAccessDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the document',
        example: '12345',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDocumentAccessDto.prototype, "documentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the end user',
        example: '67890',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDocumentAccessDto.prototype, "endUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The role of the document access',
        enum: client_1.DocumentRole,
        example: client_1.DocumentRole.VIEWER,
    }),
    (0, class_validator_1.IsEnum)(client_1.DocumentRole),
    __metadata("design:type", String)
], CreateDocumentAccessDto.prototype, "documentRole", void 0);
//# sourceMappingURL=create-document-access.dto.js.map