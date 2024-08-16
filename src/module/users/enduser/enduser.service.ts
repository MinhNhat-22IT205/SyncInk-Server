import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EndUserRepository } from './repository/enduser.repository';
import { EndUser } from '@prisma/client';

@Injectable()
export class EndUserService {
  constructor(private readonly endUserRepository: EndUserRepository) {}
  async create(createUserDto: CreateUserDto): Promise<EndUser> {
    return this.endUserRepository.create(createUserDto);
  }

  async findAll(): Promise<EndUser[]> {
    return this.endUserRepository.findMany({});
  }

  async findByUsername(username: string): Promise<EndUser[]> {
    return this.endUserRepository.findMany({ where: { username: { contains: username } } });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
