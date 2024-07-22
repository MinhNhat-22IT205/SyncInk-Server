import { GenericRepository } from 'src/core/database/generic-postgres.repository';
import { PrismaService } from 'src/module/prisma/prisma.service';
import { EditorEntityPopulated } from '../entities/editor.entity';
export declare class EditorRepository extends GenericRepository<EditorEntityPopulated> {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
}
