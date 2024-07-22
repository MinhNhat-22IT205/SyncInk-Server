import { Injectable } from '@nestjs/common';
import { GenericRepository } from 'src/core/database/generic-postgres.repository';
import { ViewerEntityPopulated } from '../entities/viewer.entity';
import { PrismaService } from 'src/module/prisma/prisma.service';
import { ENTITY_NAME } from 'src/shared/constants/entity-name.constant';

@Injectable()
export class ViewerRepository extends GenericRepository<ViewerEntityPopulated> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService, ENTITY_NAME.VIEWER);
  }
}
