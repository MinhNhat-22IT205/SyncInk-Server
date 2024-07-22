import { AddViewerDto } from './dto/create-viewer.dto';
import { ViewerRepository } from './repository/viewer.repository';
import { ViewerEntity, ViewerEntityPopulated } from './entities/viewer.entity';
import { getDocumentViewersDto } from './dto/get-document-viewer.dto';
import { GetViewerByIdDto } from './dto/get-viewer-by-id.dto';
export declare class ViewerService {
    private readonly viewerRepository;
    constructor(viewerRepository: ViewerRepository);
    addViewer(addViewerDto: AddViewerDto): Promise<ViewerEntity>;
    getViewersFromDocumentId(getDocumentViewersDto: getDocumentViewersDto): Promise<ViewerEntityPopulated[]>;
    getViewerById(getViewerDto: GetViewerByIdDto): Promise<ViewerEntityPopulated>;
    removeViewerById(removeViewerDto: GetViewerByIdDto): Promise<ViewerEntity>;
}
