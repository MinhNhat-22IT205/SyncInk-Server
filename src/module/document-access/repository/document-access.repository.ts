import { Injectable } from '@nestjs/common';
import { GenericRepository } from 'src/core/database/generic-postgres.repository';
import { PrismaService } from 'src/module/prisma/prisma.service';
import { ENTITY_NAME } from 'src/shared/constants/entity-name.constant';
import { DocumentAccessPopulated } from '../entities/document-access.entity';

@Injectable()
export class DocumentAccessRepository extends GenericRepository<DocumentAccessPopulated> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService, ENTITY_NAME.EDITOR);
  }
}
