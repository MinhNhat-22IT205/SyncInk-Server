import { Injectable } from '@nestjs/common';
import { AddViewerDto } from './dto/create-viewer.dto';
import { UpdateViewerDto } from './dto/update-viewer.dto';
import { ViewerRepository } from './repository/viewer.repository';
import { ViewerEntity, ViewerEntityPopulated } from './entities/viewer.entity';
import { getDocumentViewersDto } from './dto/get-document-viewer.dto';
import { GetViewerByIdDto } from './dto/get-viewer-by-id.dto';

@Injectable()
export class ViewerService {
  constructor(private readonly viewerRepository: ViewerRepository) {}
  async addViewer(addViewerDto: AddViewerDto): Promise<ViewerEntity> {
    return this.viewerRepository.create(addViewerDto);
  }
  async getViewersFromDocumentId(
    getDocumentViewersDto: getDocumentViewersDto,
  ): Promise<ViewerEntityPopulated[]> {
    return this.viewerRepository.findMany({
      where: { documentId: getDocumentViewersDto.documentId },
      include: { document: true, endUser: true },
    });
  }
  async getViewerById(getViewerDto: GetViewerByIdDto): Promise<ViewerEntityPopulated> {
    return this.viewerRepository.findOne({
      where: { id: getViewerDto.viewerId },
      include: { document: true, endUser: true },
    });
  }
  async removeViewerById(removeViewerDto: GetViewerByIdDto): Promise<ViewerEntity> {
    return this.viewerRepository.delete(removeViewerDto.viewerId);
  }
}
