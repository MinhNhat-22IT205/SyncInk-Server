import { AddEditorDto } from './dto/create-editor.dto';
import { getDocumentEditorsDto } from './dto/get-editors-of-document.dto';
import { GetEditorByIdDto } from './dto/get-editor.dto';
import { EditorRepository } from './repository/editor.repository';
import { EditorEntity, EditorEntityPopulated } from './entities/editor.entity';
export declare class EditorService {
    private readonly editorRepository;
    constructor(editorRepository: EditorRepository);
    addEditor(addEditorDto: AddEditorDto): Promise<EditorEntity>;
    getEditorsFromDocumentId(getDocumentEditorsDto: getDocumentEditorsDto): Promise<EditorEntityPopulated[]>;
    getEditorById(getEditorDto: GetEditorByIdDto): Promise<EditorEntityPopulated>;
    removeEditorById(removeEditorDto: GetEditorByIdDto): Promise<EditorEntityPopulated>;
}
