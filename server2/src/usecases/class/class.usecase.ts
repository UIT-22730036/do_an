import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassDto, UpdateClassDto } from 'src/core/dtos';
import { ClassEntity } from 'src/core/entities';
import { ClassRepository } from 'src/infrastructures/class/class.repository';
import { StudentRepository } from 'src/infrastructures/students/student.repository';
import { UpdateResult } from 'typeorm';

interface IClassUseCase {
  findAll(): Promise<ClassEntity[]>;
  create(data: CreateClassDto): Promise<ClassEntity>;
  update(id: number, data: UpdateClassDto): Promise<ClassEntity>;
  delete(id: number): Promise<UpdateResult>;
}

@Injectable()
export class ClassUseCase implements IClassUseCase {
  constructor(
    @Inject('CLASS_REPOSITORY')
    private readonly classRepository: ClassRepository,
    @Inject('STUDENT_REPOSITORY')
    private readonly studentRepository: StudentRepository,
  ) {}

  async findAll(): Promise<ClassEntity[]> {
    const classes = await this.classRepository.findAll();

    for (const lop of classes) {
      const students = await this.studentRepository.findManyByClassId(lop.id);

      lop.studentCount = students.length;
    }

    return classes;
  }

  create(data: CreateClassDto): Promise<ClassEntity> {
    const classEntity = new ClassEntity();

    classEntity.name = data.name;

    return this.classRepository.create(classEntity);
  }

  async update(id: number, data: UpdateClassDto): Promise<ClassEntity> {
    try {
      const lop = await this.classRepository.findById(id ?? -1);
      if (!lop) throw new NotFoundException('Class not found');

      Object.keys(data).forEach((key) => {
        lop[key] = data[key];
      });

      return this.classRepository.update(lop);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  delete(id: number): Promise<UpdateResult> {
    return this.classRepository.delete(id);
  }
}
