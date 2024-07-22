import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { EditorService } from './editor.service';
import { AddEditorDto } from './dto/create-editor.dto';
import { UpdateEditorDto } from './dto/update-editor.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { EditorEntity, EditorEntityPopulated } from './entities/editor.entity';
import { JwtAuthGuard } from 'src/module/auth/strategy/jwt-auth.guard';
import { getDocumentEditorsDto } from './dto/get-editors-of-document.dto';
import { UseSerializeInterceptor } from 'src/core/interceptor/serialize.interceptor';
import { EndUserEntity } from 'src/module/users/enduser/entities/enduser.entity';

@UseGuards(JwtAuthGuard)
@Controller('editors')
@ApiTags('editors')
@ApiBearerAuth()
export class EditorController {
  constructor(private readonly editorService: EditorService) {}

  @Post()
  @ApiCreatedResponse({ type: EditorEntity })
  create(@Body() addEditorDto: AddEditorDto) {
    return this.editorService.addEditor(addEditorDto);
  }

  @Get()
  @UseSerializeInterceptor(EditorEntityPopulated)
  @ApiCreatedResponse({ type: EditorEntityPopulated })
  getEditorsFromDocumentId(@Query() getDocumentEditorsDto: getDocumentEditorsDto) {
    return this.editorService.getEditorsFromDocumentId(getDocumentEditorsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.editorService.getEditorById({ editorId: id });
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.editorService.removeEditorById({ editorId: id });
  }
}
