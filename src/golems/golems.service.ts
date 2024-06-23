/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateGolemDto } from './dto/create-golem.dto';
import { UpdateGolemDto } from './dto/update-golem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GolemsService {
  constructor( private prisma: PrismaService) {}

  create(createGolemDto: CreateGolemDto) {
    return this.prisma.golem.create({
      data: createGolemDto,
    });
  }

  findAllAlive() {
    return this.prisma.golem.findMany({
      where: { extinct: false},
    });
  }
  findAllExtinct() {
    return this.prisma.golem.findMany({
      where: { extinct: true },
    });
  }

  findOne(id: number) {
    return this.prisma.golem.findUnique({
      where: {id}
    })
  }

  update(id: number, updateGolemDto: UpdateGolemDto) {
    return this.prisma.golem.update({
      where: {id},
      data: updateGolemDto,
    })
  }

  remove(id: number) {
    return this.prisma.golem.delete({
      where: {id}
    });
  }
}
