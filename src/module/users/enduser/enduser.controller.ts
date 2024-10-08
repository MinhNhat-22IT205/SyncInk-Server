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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { EndUserEntity } from './entities/enduser.entity';
import { JwtAuthGuard } from 'src/module/auth/strategy/jwt-auth.guard';
import { UseSerializeInterceptor } from 'src/core/interceptor/serialize.interceptor';
import { EndUserService } from './enduser.service';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth()
@UseSerializeInterceptor(EndUserEntity)
@UseGuards(JwtAuthGuard)
export class EndUserController {
  constructor(private readonly EndUserService: EndUserService) {}

  @Post()
  @ApiCreatedResponse({ type: EndUserEntity })
  create(@Body() createUserDto: CreateUserDto) {
    return this.EndUserService.create(createUserDto);
  }

  @Get()
  @ApiCreatedResponse({ type: EndUserEntity, isArray: true })
  findAll() {
    return this.EndUserService.findAll();
  }

  @Get('search-by-username')
  @ApiCreatedResponse({ type: EndUserEntity, isArray: true })
  findByUsername(@Query('query') query: string) {
    return this.EndUserService.findByUsername(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.EndUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.EndUserService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.EndUserService.remove(+id);
  }
}
