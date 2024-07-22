import { GenericRepository } from 'src/core/database/generic-postgres.repository';
import { ViewerEntityPopulated } from '../entities/viewer.entity';
import { PrismaService } from 'src/module/prisma/prisma.service';
export declare class ViewerRepository extends GenericRepository<ViewerEntityPopulated> {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
}
