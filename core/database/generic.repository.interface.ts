export abstract class BaseRepository {
  public abstract findById(id: unknown): Promise<unknown>;

  public abstract findOne(...args: any[]): Promise<unknown>;

  public abstract findMany(...args: any[]): Promise<unknown>;

  public abstract update(...args: any[]): Promise<unknown>;

  public abstract delete(id: unknown): Promise<unknown>;

  public abstract create(...args: any[]): Promise<unknown>;
}
export abstract class PostgresRepository extends BaseRepository {}
