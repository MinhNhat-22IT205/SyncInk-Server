import { Prisma } from '@prisma/client';
export type ModelWithoutId<T> = Omit<T, 'id'>;
export type ModelWhereInput<T> = {
    AND?: ModelWhereInput<T> | ModelWhereInput<T>[];
    OR?: ModelWhereInput<T>[];
    NOT?: ModelWhereInput<T> | ModelWhereInput<T>[];
} & {
    [K in keyof T]?: T[K] extends string ? Prisma.StringFilter<keyof T> | string : T[K] extends Date ? Prisma.DateTimeFilter<keyof T> | Date | string : never;
};
export type ModelWhereUniqueInput<T> = Prisma.AtLeast<ModelWhereInput<T>, 'id'>;
export type ModelOrderByWithRelationInput<T> = {
    [K in keyof T]?: Prisma.SortOrder;
};
export type ModelSelect<T> = {
    [K in keyof T]?: boolean;
};
export type SelectedFields<T, U extends ModelSelect<T>> = {
    [K in keyof U & keyof T]: T[K];
};
export type ModelInclude<T> = {
    [K in keyof T]?: boolean | ModelInclude<InferIncludeModelType<T[K]>>;
};
export type InferIncludeModelType<T> = T extends (infer U)[] ? U : T extends object ? T : never;
