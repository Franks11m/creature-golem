/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GolemsModule } from './golems/golems.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [GolemsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
