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
import { CreateStudentDto, StudentDto, UpdateStudentDto } from 'src/core/dtos';
import { StudentEntity } from 'src/core/entities';
import { StudentUseCase } from 'src/usecases/students/student.usecase';
import { UpdateResult } from 'typeorm';

interface IStudentController {
  findAll(): Promise<StudentDto[]>;
  create(data: any): Promise<StudentEntity>;
  update(id: number, data: UpdateStudentDto): Promise<StudentEntity>;
  delete(id: number): Promise<UpdateResult>;
}

@Controller('students')
export class StudentController implements IStudentController {
  constructor(
    @Inject('STUDENT_USE_CASE')
    private readonly studentUseCase: StudentUseCase,
  ) {}

  @Get('/')
  async findAll(): Promise<StudentDto[]> {
    return this.studentUseCase.findAll();
  }

  @Post('/create')
  create(@Body() data: CreateStudentDto): Promise<StudentEntity> {
    return this.studentUseCase.create(data);
  }

  @Put('/update/:id')
  update(
    @Param('id') id: number,
    @Body() data: UpdateStudentDto,
  ): Promise<StudentEntity> {
    return this.studentUseCase.update(id, data);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: number): Promise<UpdateResult> {
    return this.studentUseCase.delete(id);
  }
}
