import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { GenericRepository } from 'core/database/generic-postgres.repository';
import { ENTITY_NAME } from 'shared/constants/entity-name.constant';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepository extends GenericRepository<User> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService, 'user');
  }
}
