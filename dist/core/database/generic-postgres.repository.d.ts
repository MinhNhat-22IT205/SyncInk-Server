import { PrismaClient } from '@prisma/client';
import { PostgresRepository } from './base.repository.interface';
import { ModelInclude, ModelOrderByWithRelationInput, ModelSelect, ModelWhereInput, ModelWhereUniqueInput, ModelWithoutId, SelectedFields } from 'src/shared/types/postgresTypes';
export declare class GenericRepository<T> implements PostgresRepository {
    private readonly prismaClient;
    private readonly modelName;
    constructor(prismaClient: PrismaClient, modelName: string);
    findMany<U extends ModelSelect<T>>(options: {
        skip?: number;
        take?: number;
        cursor?: ModelWhereUniqueInput<T>;
        where?: ModelWhereInput<T>;
        select?: U;
        orderBy?: ModelOrderByWithRelationInput<T>;
        include?: ModelInclude<T>;
    }): Promise<SelectedFields<T, U>[]>;
    findById(id: string): Promise<T>;
    findOne<U extends ModelSelect<T>>(options: {
        where: ModelWhereInput<T>;
        select?: U;
        include?: ModelInclude<T>;
    }): Promise<SelectedFields<T, U>>;
    update(args: {
        data: Partial<ModelWithoutId<T>>;
        where: ModelWhereInput<T>;
    }): Promise<T>;
    delete(id: string): Promise<T>;
    create(data: Partial<T>): Promise<T>;
}
