import { GenericRepository } from 'src/core/database/generic-postgres.repository';
import { PrismaService } from 'src/module/prisma/prisma.service';
import { EndUserEntity } from '../entities/enduser.entity';
export declare class EndUserRepository extends GenericRepository<EndUserEntity> {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
}
