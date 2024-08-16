import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DocumentService } from './services/document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
import { DocumentEntity } from './entities/document.entity';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { User } from 'src/shared/decorators/get-user.decorator';
import { EndUserMinimal } from '../users/enduser/entities/enduser.entity';

@UseGuards(JwtAuthGuard)
@Controller('documents')
@ApiTags('documents')
@ApiBearerAuth()
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  @ApiCreatedResponse({ type: DocumentEntity })
  create(@Body() createDocumentDto: CreateDocumentDto, @User() endUser: EndUserMinimal) {
    return this.documentService.createDocument(createDocumentDto, endUser.id);
  }

  @Get('your-documents')
  getUsersDocuments(@User() endUser: EndUserMinimal) {
    return this.documentService.getDocumentsByUserId(endUser.id);
  }

  @Get(':id')
  getDocument(@Param('id') id: string, @User() endUser: EndUserMinimal) {
    return this.documentService.checkAccessAndGetDocumentById(id, endUser.id);
  }

  @Patch(':id')
  updateDocument(
    @Param('id') id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
    @User() endUser: EndUserMinimal,
  ) {
    return this.documentService.checkAccessAndUpdateDocument(updateDocumentDto, id, endUser.id);
  }

  @Delete(':id')
  removeDocument(@Param('id') id: string, @User() endUser: EndUserMinimal) {
    return this.documentService.checkAccessAndDeleteDocument(id, endUser.id);
  }
}
