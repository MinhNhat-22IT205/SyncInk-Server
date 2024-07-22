import { GenericRepository } from 'src/core/database/generic-postgres.repository';
import { DocumentEntity } from '../entities/document.entity';
import { PrismaService } from 'src/module/prisma/prisma.service';
export declare class DocumentRepository extends GenericRepository<DocumentEntity> {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
}
