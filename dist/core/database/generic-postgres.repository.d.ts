import { PrismaClient } from '@prisma/client';
import { PostgresRepository } from './base.repository.interface';
import { ModelOrderByWithRelationInput, ModelSelect, ModelWhereInput, ModelWhereUniqueInput, ModelWithoutId } from 'src/shared/types/postgresTypes';
export declare class GenericRepository<T> implements PostgresRepository {
    private readonly prismaClient;
    private readonly modelName;
    constructor(prismaClient: PrismaClient, modelName: string);
    findMany(options: {
        skip?: number;
        take?: number;
        cursor?: ModelWhereUniqueInput<T>;
        where?: ModelWhereInput<T>;
        select?: ModelSelect<T>;
        orderBy?: ModelOrderByWithRelationInput<T>;
    }): Promise<T[]>;
    findById(id: string): Promise<T>;
    findOne(options: {
        where: ModelWhereInput<T>;
        select?: ModelSelect<T>;
    }): Promise<T>;
    update(data: Partial<ModelWithoutId<T>>, options: {
        where: ModelWhereInput<T>;
    }): Promise<T>;
    delete(id: string): Promise<T>;
    create(data: Partial<T>): Promise<T>;
}
