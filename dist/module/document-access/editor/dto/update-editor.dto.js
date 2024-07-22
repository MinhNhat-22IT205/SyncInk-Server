"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEditorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_editor_dto_1 = require("./create-editor.dto");
class UpdateEditorDto extends (0, swagger_1.PartialType)(create_editor_dto_1.AddEditorDto) {
}
exports.UpdateEditorDto = UpdateEditorDto;
//# sourceMappingURL=update-editor.dto.js.map