import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateStudentDto, StudentDto } from 'src/core/dtos';
import { StudentEntity } from 'src/core/entities';
import { StudentUseCase } from 'src/usecases/students/student.usecase';

interface IStudentController {
  findAll(): Promise<StudentDto[]>;
  create(data: any): Promise<StudentEntity>;
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
}
