import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from 'src/core/entities';
import { DataSource, IsNull, Repository } from 'typeorm';

interface IStudentRepository {
  findAll(): Promise<StudentEntity[]>;
  findById(id: number): Promise<StudentEntity>;
  findManyByClassId(id: number): Promise<StudentEntity[]>;
  create(student: StudentEntity): Promise<StudentEntity>;
  createBatch(student: StudentEntity[]): Promise<StudentEntity[]>;
  update(student: StudentEntity): Promise<StudentEntity>;
  delete(id: number);
}

@Injectable()
export class StudentRepository implements IStudentRepository {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
    private readonly dataSource: DataSource,
  ) {}

  findAll(): Promise<StudentEntity[]> {
    return this.studentRepository.find({
      where: { deletedAt: IsNull() },
      order: { id: 'ASC' },
    });
  }

  findById(id: number): Promise<StudentEntity> {
    return this.studentRepository.findOneBy({ id, deletedAt: IsNull() });
  }

  findManyByClassId(id: number): Promise<StudentEntity[]> {
    return this.studentRepository.findBy({ classId: id });
  }

  create(student: StudentEntity): Promise<StudentEntity> {
    return this.studentRepository.save(student);
  }

  createBatch(students: StudentEntity[]): Promise<StudentEntity[]> {
    return this.dataSource.transaction(async (manager) => {
      return manager.save(students);
    });
  }

  async update(student: StudentEntity): Promise<StudentEntity> {
    return this.studentRepository.save(student);
  }

  delete(id: number) {
    return this.studentRepository.softDelete(id);
  }
}
