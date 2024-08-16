import { PrismaClient } from '@prisma/client';
import { PostgresRepository } from './base.repository.interface';
import {
  ModelInclude,
  ModelOrderByWithRelationInput,
  ModelSelect,
  ModelWhereInput,
  ModelWhereUniqueInput,
  ModelWithoutId,
  SelectedFields,
} from 'src/shared/types/postgresTypes';

export class GenericRepository<T> implements PostgresRepository {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly modelName: string,
  ) {}
  public async findMany<U extends ModelSelect<T>>(options: {
    skip?: number;
    take?: number;
    cursor?: ModelWhereUniqueInput<T>;
    where?: ModelWhereInput<T>;
    select?: U;
    orderBy?: ModelOrderByWithRelationInput<T>;
    include?: ModelInclude<T>;
  }): Promise<SelectedFields<T, U>[]> {
    // const a = this.prismaClient.documentAccess.findMany({include:{}});
    return this.prismaClient[this.modelName].findMany(options);
  }
  public async findById(id: string): Promise<T> {
    return this.prismaClient[this.modelName].findUnique({
      where: { id },
    });
  }
  public async findOne<U extends ModelSelect<T>>(options: {
    where: ModelWhereInput<T>;
    select?: U;
    include?: ModelInclude<T>;
  }): Promise<SelectedFields<T, U>> {
    return this.prismaClient[this.modelName].findUnique(options);
  }
  public async update(args: {
    data: Partial<ModelWithoutId<T>>;
    where: ModelWhereInput<T>;
  }): Promise<T> {
    return this.prismaClient[this.modelName].update(args);
  }
  public async delete(id: string): Promise<T> {
    return this.prismaClient[this.modelName].delete({ where: { id } });
  }
  public async create(data: Partial<T>): Promise<T> {
    return this.prismaClient[this.modelName].create({ data });
  }
}
