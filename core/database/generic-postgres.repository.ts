import { Prisma, PrismaClient } from '@prisma/client';
import { PostgresRepository } from './generic.repository.interface';
import { ModelOrderByWithRelationInput, ModelWhereInput, ModelWhereUniqueInput, ModelWithoutId } from 'shared/types/postgresTypes';
import { skip } from 'node:test';
import { EntityName } from 'shared/types/postgresTypes/entity-name.type';
type PrismaModelName = keyof PrismaClient;
type ModelType<T extends PrismaModelName> = T extends any ? (PrismaClient[T] extends { findUnique: (args: any) => Promise<infer R> | null } ? R : never) : never;
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
    orderBy?: ModelOrderByWithRelationInput<T>;
  }): Promise<T[]> {
    return this.prismaClient[this.modelName].findMany(options);
  }
  public async findById(id: string): Promise<T> {
    return this.prismaClient[this.modelName].findUnique({
      where: { id },
    });
  }
  public async findOne(options: { where: ModelWhereUniqueInput<T> }): Promise<T> {
    return this.prismaClient[this.modelName].findUnique(options);
  }
  public async update(data: Partial<ModelWithoutId<T>>, options: { where: ModelWhereInput<T> }): Promise<T> {
    return this.prismaClient[this.modelName].update({ data, ...options });
  }
  public async delete(id: string): Promise<T> {
    return this.prismaClient[this.modelName].delete({ where: { id } });
  }
  public async create(data: Partial<T>): Promise<T> {
    return this.prismaClient[this.modelName].create({ data });
  }
}
