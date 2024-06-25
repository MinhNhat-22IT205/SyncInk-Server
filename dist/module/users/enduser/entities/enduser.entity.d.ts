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
