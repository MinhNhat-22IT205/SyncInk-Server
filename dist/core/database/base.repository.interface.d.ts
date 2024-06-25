export declare abstract class BaseRepository {
    abstract findById(id: unknown): Promise<unknown>;
    abstract findOne(...args: any[]): Promise<unknown>;
    abstract findMany(...args: any[]): Promise<unknown>;
    abstract update(...args: any[]): Promise<unknown>;
    abstract delete(id: unknown): Promise<unknown>;
    abstract create(...args: any[]): Promise<unknown>;
}
export declare abstract class PostgresRepository extends BaseRepository {
}
