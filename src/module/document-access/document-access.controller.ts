import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Query,
  Patch,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/module/auth/strategy/jwt-auth.guard';
import { EndUserMinimal } from 'src/module/users/enduser/entities/enduser.entity';
import { DocumentAccessService } from './document-access.service';
import { DocumentAccessEntity, DocumentAccessPopulated } from './entities/document-access.entity';
import { ChangeDocumentAccessDto } from './dto/change-document-access.dto';
import { DocumentIdDto } from './dto/documentId.dto';
import { CreateDocumentAccessDto } from './dto/create-document-access.dto';
import { User } from 'src/shared/decorators/get-user.decorator';
import { UserAccessToDocument } from './types/user-access-to-document.type';

@UseGuards(JwtAuthGuard)
@Controller('document-access')
@ApiTags('document-access')
@ApiBearerAuth()
export class DocumentAccessController {
  constructor(private readonly documentAccessService: DocumentAccessService) {}

  @Post()
  @ApiCreatedResponse({ type: DocumentAccessEntity })
  async createDocumentAccess(
    @Body() createDocumentAccessDto: CreateDocumentAccessDto,
    @User() endUser: EndUserMinimal,
  ) {
    const { documentId, endUserId, documentRole } = createDocumentAccessDto;
    return this.documentAccessService.checkAccessAndCreateDocumentAccess(
      documentId,
      endUserId,
      documentRole,
      endUser.id,
    );
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: DocumentAccessEntity })
  async changeDocumentAccess(
    @Body() { documentRole }: ChangeDocumentAccessDto,
    @Param() documentAccessId: string,
    @User() endUser: EndUserMinimal,
  ) {
    return this.documentAccessService.checkAccessAndChangeDocumentAccess(
      documentAccessId,
      documentRole,
      endUser.id,
    );
  }

  @Get()
  @ApiCreatedResponse({ type: [DocumentAccessPopulated] })
  async getDocumentAccessesByDocumentId(@Query() getDocumentAccessDto: DocumentIdDto) {
    const { documentId } = getDocumentAccessDto;
    return this.documentAccessService.getDocumentAccessesByDocumentId(documentId);
  }

  @Get('viewers')
  @ApiCreatedResponse({ type: [DocumentAccessPopulated] })
  async getViewersByDocumentId(@Query() getDocumentAccessDto: DocumentIdDto) {
    const { documentId } = getDocumentAccessDto;
    return this.documentAccessService.getViewersByDocumentId(documentId);
  }

  @Get('editors')
  @ApiCreatedResponse({ type: [DocumentAccessPopulated] })
  async getEditorsByDocumentId(@Query() getDocumentAccessDto: DocumentIdDto) {
    const { documentId } = getDocumentAccessDto;
    return this.documentAccessService.getEditorsByDocumentId(documentId);
  }

  @Get('get-access')
  @ApiCreatedResponse({ type: UserAccessToDocument })
  async getUserAccessToDocument(
    @Query() getDocumentAccessDto: DocumentIdDto,
    @User() endUser: EndUserMinimal,
  ) {
    const canViewAndCanEditObject = this.documentAccessService.getCanViewAndCanEdit(
      endUser.id,
      getDocumentAccessDto.documentId,
    );
    return canViewAndCanEditObject;
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: DocumentAccessEntity })
  async removeDocumentAccess(
    @Param('id') documentAccessId: string,
    @User() endUser: EndUserMinimal,
  ) {
    return this.documentAccessService.checkAccessAndRemoveDocumentAccess(
      documentAccessId,
      endUser.id,
    );
  }
}
