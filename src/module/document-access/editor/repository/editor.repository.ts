import { Injectable } from '@nestjs/common';
import { GenericRepository } from 'src/core/database/generic-postgres.repository';
import { PrismaService } from 'src/module/prisma/prisma.service';
import { ENTITY_NAME } from 'src/shared/constants/entity-name.constant';
import { EditorEntity, EditorEntityPopulated } from '../entities/editor.entity';

@Injectable()
export class EditorRepository extends GenericRepository<EditorEntityPopulated> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService, ENTITY_NAME.EDITOR);
  }
}
