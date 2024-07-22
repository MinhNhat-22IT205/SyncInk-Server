import { Module } from '@nestjs/common';
import { ViewerService } from './viewer.service';
import { ViewerController } from './viewer.controller';
import { ViewerRepository } from './repository/viewer.repository';
import { PrismaService } from 'src/module/prisma/prisma.service';

@Module({
  controllers: [ViewerController],
  providers: [ViewerService, ViewerRepository, PrismaService],
})
export class ViewerModule {}
