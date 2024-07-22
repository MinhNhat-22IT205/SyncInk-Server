import { EditorService } from './editor.service';
import { AddEditorDto } from './dto/create-editor.dto';
import { EditorEntity, EditorEntityPopulated } from './entities/editor.entity';
import { getDocumentEditorsDto } from './dto/get-editors-of-document.dto';
export declare class EditorController {
    private readonly editorService;
    constructor(editorService: EditorService);
    create(addEditorDto: AddEditorDto): Promise<EditorEntity>;
    getEditorsFromDocumentId(getDocumentEditorsDto: getDocumentEditorsDto): Promise<EditorEntityPopulated[]>;
    findOne(id: string): Promise<EditorEntityPopulated>;
    remove(id: string): Promise<EditorEntityPopulated>;
}
