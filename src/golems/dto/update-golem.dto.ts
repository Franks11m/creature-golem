/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateGolemDto } from './create-golem.dto';

export class UpdateGolemDto extends PartialType(CreateGolemDto) {}
