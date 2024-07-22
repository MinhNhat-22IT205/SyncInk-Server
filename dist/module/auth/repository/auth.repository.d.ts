import { GenericRepository } from 'src/core/database/generic-postgres.repository';
import { PrismaService } from 'src/module/prisma/prisma.service';
import { EndUserEntity } from 'src/module/users/enduser/entities/enduser.entity';
export declare class AuthRepository extends GenericRepository<EndUserEntity> {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
}
