import { Inject, Injectable } from '@nestjs/common';
import { CreateStudentDto, StudentDto } from 'src/core/dtos';
import { ClassEntity, StudentEntity } from 'src/core/entities';
import { ClassRepository } from 'src/infrastructures/class/class.repository';
import { StudentRepository } from 'src/infrastructures/students/student.repository';

interface IStudentUseCase {
  findAll(): Promise<StudentDto[]>;
  create(data: CreateStudentDto): Promise<StudentEntity>;
}

@Injectable()
export class StudentUseCase implements IStudentUseCase {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private readonly studentRepository: StudentRepository,
    @Inject('CLASS_REPOSITORY')
    private readonly classRepository: ClassRepository,
  ) {}

  async findAll() {
    const students = await this.studentRepository.findAll();

    const classes: ClassEntity[] = [];

    for (const student of students) {
      const lop = await this.classRepository.findById(student.maLop);

      if (lop) {
        classes.push(lop);
      }
    }

    return students.map((student, index) => ({
      ...student,
      lop: classes[index],
    }));
  }

  async create(data: CreateStudentDto) {
    const student = new StudentEntity();
    student.maLop = data.maLop;
    student.email = data.email;
    student.tenSv = data.tenSv;
    return this.studentRepository.create(student);
  }
}
