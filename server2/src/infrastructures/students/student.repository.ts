import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from 'src/core/entities';
import { Repository } from 'typeorm';

interface IStudentRepository {
  findAll(): Promise<StudentEntity[]>;
  create(student: StudentEntity): Promise<StudentEntity>;
}

@Injectable()
export class StudentRepository implements IStudentRepository {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  findAll(): Promise<StudentEntity[]> {
    return this.studentRepository.find();
  }

  create(student: StudentEntity): Promise<StudentEntity> {
    return this.studentRepository.save(student);
  }
}
