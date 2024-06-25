import { Prisma, PrismaClient } from '@prisma/client';
import { PostgresRepository } from './base.repository.interface';
import {
  ModelOrderByWithRelationInput,
  ModelSelect,
  ModelWhereInput,
  ModelWhereUniqueInput,
  ModelWithoutId,
} from 'src/shared/types/postgresTypes';

export class GenericRepository<T> implements PostgresRepository {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly modelName: string,
  ) {}
  public async findMany(options: {
    skip?: number;
    take?: number;
    cursor?: ModelWhereUniqueInput<T>;
    where?: ModelWhereInput<T>;
    select?: ModelSelect<T>;
    orderBy?: ModelOrderByWithRelationInput<T>;
  }): Promise<T[]> {
    return this.prismaClient[this.modelName].findMany(options);
  }
  public async findById(id: string): Promise<T> {
    return this.prismaClient[this.modelName].findUnique({
      where: { id },
    });
  }
  public async findOne(options: {
    where: ModelWhereInput<T>;
    select?: ModelSelect<T>;
  }): Promise<T> {
    return this.prismaClient[this.modelName].findUnique(options);
  }
  public async update(
    data: Partial<ModelWithoutId<T>>,
    options: { where: ModelWhereInput<T> },
  ): Promise<T> {
    return this.prismaClient[this.modelName].update({ data, ...options });
  }
  public async delete(id: string): Promise<T> {
    return this.prismaClient[this.modelName].delete({ where: { id } });
  }
  public async create(data: Partial<T>): Promise<T> {
    return this.prismaClient[this.modelName].create({ data });
  }
}
