import { User } from '@prisma/client';
import { GenericRepository } from 'core/database/generic-postgres.repository';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserRepository extends GenericRepository<User> {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
}
