import { GenericRepository } from 'src/core/database/generic-postgres.repository';
import { PrismaService } from 'src/module/prisma/prisma.service';
import { DocumentAccessPopulated } from '../entities/document-access.entity';
export declare class DocumentAccessRepository extends GenericRepository<DocumentAccessPopulated> {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
}
