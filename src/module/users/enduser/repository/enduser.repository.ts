import { Injectable } from '@nestjs/common';
import { EndUser } from '@prisma/client';
import { GenericRepository } from 'src/core/database/generic-postgres.repository';
import { ENTITY_NAME } from 'src/shared/constants/entity-name.constant';
import { PrismaService } from 'src/module/prisma/prisma.service';
import { EndUserEntity } from '../entities/enduser.entity';

@Injectable()
export class EndUserRepository extends GenericRepository<EndUserEntity> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService, ENTITY_NAME.ENDUSER);
  }
}
