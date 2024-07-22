import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ViewerService } from './viewer.service';
import { UpdateViewerDto } from './dto/update-viewer.dto';
import { AddViewerDto } from './dto/create-viewer.dto';

@Controller('viewer')
export class ViewerController {
  constructor(private readonly viewerService: ViewerService) {}

  @Post()
  create(@Body() createViewerDto: AddViewerDto) {
    return this.viewerService.addViewer(createViewerDto);
  }

  @Get()
  getViewersFromDocumentId(@Query() documentId: string) {
    return this.viewerService.getViewersFromDocumentId({ documentId });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.viewerService.getViewerById({ viewerId: id });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.viewerService.removeViewerById({ viewerId: id });
  }
}
