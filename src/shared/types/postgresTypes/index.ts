import { Prisma } from '@prisma/client';
import * as runtime from '@prisma/client/runtime/library.js';
import $Extensions = runtime.Types.Extensions;

export type ModelWithoutId<T> = Omit<T, 'id'>;

export type ModelWhereInput<T> = {
  AND?: ModelWhereInput<T> | ModelWhereInput<T>[];
  OR?: ModelWhereInput<T>[];
  NOT?: ModelWhereInput<T> | ModelWhereInput<T>[];
} & {
  [K in keyof T]?: T[K] extends string
    ? Prisma.StringFilter<keyof T> | string
    : T[K] extends Date
      ? Prisma.DateTimeFilter<keyof T> | Date | string
      : never; // Handle other types as needed
};

// this where must contain id
export type ModelWhereUniqueInput<T> = Prisma.AtLeast<ModelWhereInput<T>, 'id'>;

export type ModelOrderByWithRelationInput<T> = {
  [K in keyof T]?: Prisma.SortOrder;
};

export type ModelSelect<T> = {
  [K in keyof T]?: boolean;
};
