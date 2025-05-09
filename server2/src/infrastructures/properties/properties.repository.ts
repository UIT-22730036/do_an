import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyEntity } from 'src/core/entities';
import { DataSource, IsNull, Repository } from 'typeorm';

interface IPropRepository {
  findAll(): Promise<PropertyEntity[]>;
  findById(id: number): Promise<PropertyEntity>;
  create(data: PropertyEntity): Promise<PropertyEntity>;
  createBatch(props: PropertyEntity[]): Promise<PropertyEntity[]>;
  update(id: number, data: PropertyEntity): Promise<PropertyEntity>;
  delete(id: number);
}

@Injectable()
export class PropRepository implements IPropRepository {
  constructor(
    @InjectRepository(PropertyEntity)
    private readonly propRepository: Repository<PropertyEntity>,
    private readonly dataSource: DataSource,
  ) {}

  findAll(): Promise<PropertyEntity[]> {
    return this.propRepository.find({
      where: { deletedAt: IsNull() },
      order: { id: 'ASC' },
    });
  }

  findById(id: number): Promise<PropertyEntity> {
    return this.propRepository.findOne({
      where: { id, deletedAt: IsNull() },
    });
  }

  create(data: PropertyEntity): Promise<PropertyEntity> {
    return this.dataSource.transaction(async (manager) => {
      return manager.save(data);
    });
  }

  createBatch(props: PropertyEntity[]): Promise<PropertyEntity[]> {
    return this.dataSource.transaction(async (manager) => {
      return manager.save(props);
    });
  }

  update(id: number, data: PropertyEntity): Promise<PropertyEntity> {
    return this.propRepository.save(data);
  }

  delete(id: number) {
    return this.propRepository.softDelete(id);
  }
}
