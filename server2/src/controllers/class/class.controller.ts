import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateClassDto, UpdateClassDto } from 'src/core/dtos';
import { ClassEntity } from 'src/core/entities';
import { ClassUseCase } from 'src/usecases/class/class.usecase';
import { UpdateResult } from 'typeorm';

interface IClassController {
  findAll(): Promise<ClassEntity[]>;
  create(data: CreateClassDto): Promise<ClassEntity>;
  update(id: number, data: UpdateClassDto): Promise<ClassEntity>;
  delete(id: number): Promise<UpdateResult>;
}

@Controller('class')
export class ClassController implements IClassController {
  constructor(
    @Inject('CLASS_USE_CASE')
    private readonly classUseCase: ClassUseCase,
  ) {}

  @Get()
  async findAll(): Promise<ClassEntity[]> {
    return this.classUseCase.findAll();
  }

  @Post('/create')
  create(@Body() data: CreateClassDto): Promise<ClassEntity> {
    return this.classUseCase.create(data);
  }

  @Put('/update/:id')
  update(
    @Param('id') id: number,
    @Body() data: UpdateClassDto,
  ): Promise<ClassEntity> {
    return this.classUseCase.update(id, data);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: number): Promise<UpdateResult> {
    return this.classUseCase.delete(id);
  }
}
