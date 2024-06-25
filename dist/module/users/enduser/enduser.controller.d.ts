import { EndUserService } from './enduser.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class EndUserController {
    private readonly EndUserService;
    constructor(EndUserService: EndUserService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
        avatar: string;
        gender: import("@prisma/client").$Enums.Gender;
        description: string;
        activationToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
        avatar: string;
        gender: import("@prisma/client").$Enums.Gender;
        description: string;
        activationToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
