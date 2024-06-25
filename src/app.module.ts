import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './module/prisma/prisma.module';
import { EndUserModule } from './module/users/enduser/enduser.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, EndUserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
