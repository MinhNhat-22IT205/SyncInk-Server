import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EndUserRepository } from './repository/enduser.repository';
import { EndUser } from '@prisma/client';
export declare class EndUserService {
    private readonly endUserRepository;
    constructor(endUserRepository: EndUserRepository);
    create(createUserDto: CreateUserDto): Promise<EndUser>;
    findAll(): Promise<EndUser[]>;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
