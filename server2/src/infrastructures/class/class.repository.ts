import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassEntity } from 'src/core/entities';
import { IsNull, Repository, UpdateResult } from 'typeorm';

interface IClassRepository {
  findAll(): Promise<ClassEntity[]>;
  findById(id: number): Promise<ClassEntity | null>;
  findByName(name: string): Promise<ClassEntity | null>;
  create(data: ClassEntity): Promise<ClassEntity>;
  update(data: ClassEntity): Promise<ClassEntity>;
  delete(id: number): Promise<UpdateResult>;
}

@Injectable()
export class ClassRepository implements IClassRepository {
  constructor(
    @InjectRepository(ClassEntity)
    private readonly classRepository: Repository<ClassEntity>,
  ) {}

  findAll(): Promise<ClassEntity[]> {
    return this.classRepository.find({
      where: {
        deletedAt: IsNull(),
      },
    });
  }

  findById(id: number): Promise<ClassEntity | null> {
    return this.classRepository.findOneBy({ id, deletedAt: IsNull() });
  }

  findByName(name: string): Promise<ClassEntity | null> {
    return this.classRepository.findOneBy({ name, deletedAt: IsNull() });
  }

  create(data: ClassEntity): Promise<ClassEntity> {
    return this.classRepository.save(data);
  }

  update(data: ClassEntity): Promise<ClassEntity> {
    return this.classRepository.save(data);
  }

  delete(id: number): Promise<UpdateResult> {
    return this.classRepository.softDelete(id);
  }
}
