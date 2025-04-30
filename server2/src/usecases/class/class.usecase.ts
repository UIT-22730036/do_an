import { Inject, Injectable } from '@nestjs/common';
import { CreateClassDto } from 'src/core/dtos';
import { ClassEntity } from 'src/core/entities';
import { ClassRepository } from 'src/infrastructures/class/class.repository';

interface IClassUseCase {
  findAll(): Promise<ClassEntity[]>;
  create(data: CreateClassDto): Promise<ClassEntity>;
}

@Injectable()
export class ClassUseCase implements IClassUseCase {
  constructor(
    @Inject('CLASS_REPOSITORY')
    private readonly classRepository: ClassRepository,
  ) {}

  findAll(): Promise<ClassEntity[]> {
    return this.classRepository.findAll();
  }

  create(data: CreateClassDto): Promise<ClassEntity> {
    const classEntity = new ClassEntity();

    classEntity.tenLop = data.tenLop;

    return this.classRepository.create(classEntity);
  }
}
