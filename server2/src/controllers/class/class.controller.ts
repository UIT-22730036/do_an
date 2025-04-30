import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateClassDto } from 'src/core/dtos';
import { ClassEntity } from 'src/core/entities';
import { ClassUseCase } from 'src/usecases/class/class.usecase';

interface IClassController {
  findAll(): Promise<ClassEntity[]>;
  create(data: CreateClassDto): Promise<ClassEntity>;
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
}
