import { $Enums, EndUser } from '@prisma/client';
export declare class EndUserEntity implements EndUser {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    email: string;
    password: string;
    avatar: string;
    gender: $Enums.Gender;
    description: string;
    activationToken: string;
}
declare const EndUserMinimal_base: import("@nestjs/mapped-types").MappedType<Pick<EndUserEntity, "description" | "username" | "id" | "email" | "avatar">>;
export declare class EndUserMinimal extends EndUserMinimal_base {
}
export {};
