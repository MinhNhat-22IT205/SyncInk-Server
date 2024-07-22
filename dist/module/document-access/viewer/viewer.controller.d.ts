import { ViewerService } from './viewer.service';
import { AddViewerDto } from './dto/create-viewer.dto';
export declare class ViewerController {
    private readonly viewerService;
    constructor(viewerService: ViewerService);
    create(createViewerDto: AddViewerDto): Promise<import("./entities/viewer.entity").ViewerEntity>;
    getViewersFromDocumentId(documentId: string): Promise<import("./entities/viewer.entity").ViewerEntityPopulated[]>;
    findOne(id: string): Promise<import("./entities/viewer.entity").ViewerEntityPopulated>;
    remove(id: string): Promise<import("./entities/viewer.entity").ViewerEntity>;
}
