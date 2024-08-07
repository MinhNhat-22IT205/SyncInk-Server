import { Module } from '@nestjs/common';
import { EditorService } from './editor.service';
import { EditorController } from './editor.controller';
import { EditorRepository } from './repository/editor.repository';
import { PrismaService } from 'src/module/prisma/prisma.service';

@Module({
  controllers: [EditorController],
  providers: [EditorService, EditorRepository, PrismaService],
})
export class EditorModule {}
