import { Module } from '@nestjs/common';
import { EndUserService } from './enduser.service';
import { EndUserController } from './enduser.controller';
import { EndUserRepository } from './repository/enduser.repository';
import { PrismaModule } from 'src/module/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EndUserController],
  providers: [EndUserService, EndUserRepository],
})
export class EndUserModule {}
