import { Injectable } from '@nestjs/common';
import { AddEditorDto } from './dto/create-editor.dto';
import { getDocumentEditorsDto } from './dto/get-editors-of-document.dto';
import { GetEditorByIdDto } from './dto/get-editor.dto';
import { EditorRepository } from './repository/editor.repository';
import { EditorEntity, EditorEntityPopulated } from './entities/editor.entity';

@Injectable()
export class EditorService {
  constructor(private readonly editorRepository: EditorRepository) {}
  async addEditor(addEditorDto: AddEditorDto): Promise<EditorEntity> {
    return this.editorRepository.create(addEditorDto);
  }

  async getEditorsFromDocumentId(
    getDocumentEditorsDto: getDocumentEditorsDto,
  ): Promise<EditorEntityPopulated[]> {
    return this.editorRepository.findMany({
      where: { documentId: getDocumentEditorsDto.documentId },
      include: { document: true, endUser: true },
    });
  }

  async getEditorById(getEditorDto: GetEditorByIdDto) {
    return this.editorRepository.findById(getEditorDto.editorId);
  }

  async removeEditorById(removeEditorDto: GetEditorByIdDto) {
    return this.editorRepository.delete(removeEditorDto.editorId);
  }
}
