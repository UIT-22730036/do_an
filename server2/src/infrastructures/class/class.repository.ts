import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassEntity } from 'src/core/entities';
import { Repository } from 'typeorm';

interface IClassRepository {
  findAll(): Promise<ClassEntity[]>;
  findById(id: number): Promise<ClassEntity>;
  create(data: ClassEntity): Promise<ClassEntity>;
}

@Injectable()
export class ClassRepository implements IClassRepository {
  constructor(
    @InjectRepository(ClassEntity)
    private readonly classRepository: Repository<ClassEntity>,
  ) {}

  findAll(): Promise<ClassEntity[]> {
    return this.classRepository.find();
  }

  findById(id: number): Promise<ClassEntity> {
    return this.classRepository.findOne({ where: { maLop: id } });
  }

  create(data: ClassEntity): Promise<ClassEntity> {
    return this.classRepository.save(data);
  }
}
