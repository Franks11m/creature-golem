/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GolemsService } from './golems.service';
import { GolemsController } from './golems.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [GolemsController],
  providers: [GolemsService],
  imports: [PrismaModule],
})
export class GolemsModule {}
