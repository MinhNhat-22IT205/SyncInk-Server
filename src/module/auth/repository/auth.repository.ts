import { Injectable } from '@nestjs/common';
import { EndUser } from '@prisma/client';
import { GenericRepository } from 'src/core/database/generic-postgres.repository';
import { PrismaService } from 'src/module/prisma/prisma.service';
import { EndUserEntity } from 'src/module/users/enduser/entities/enduser.entity';
import { ENTITY_NAME } from 'src/shared/constants/entity-name.constant';

@Injectable()
export class AuthRepository extends GenericRepository<EndUserEntity> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService, ENTITY_NAME.ENDUSER);
  }
}
