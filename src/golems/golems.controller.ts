/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GolemsService } from './golems.service';
import { CreateGolemDto } from './dto/create-golem.dto';
import { UpdateGolemDto } from './dto/update-golem.dto';
import { ApiTags } from '@nestjs/swagger';


@Controller('golems')
@ApiTags('golems')
export class GolemsController {
  constructor(private readonly golemsService: GolemsService) {}

  @Post()
  create(@Body() createGolemDto: CreateGolemDto) {
    return this.golemsService.create(createGolemDto);
  }

  @Get()
  findAll() {
    return this.golemsService.findAllAlive();
  }

  @Get ('extinct')//localhost:3000/creature/extinct
  findAllExtinct() {
    return this.golemsService.findAllExtinct();
  }

  @Get(':id')//localhost:3000/creature/extinct
  findOne(@Param('id') id: string) {
    return this.golemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGolemDto: UpdateGolemDto) {
    return this.golemsService.update(+id, updateGolemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.golemsService.remove(+id);
  }
}
