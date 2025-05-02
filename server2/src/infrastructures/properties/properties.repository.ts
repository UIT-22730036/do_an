import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyEntity } from 'src/core/entities';
import { DataSource, IsNull, Repository } from 'typeorm';

interface IPropRepository {
  findAll(): Promise<PropertyEntity[]>;
  createBatch(props: PropertyEntity[]): Promise<PropertyEntity[]>;
}

@Injectable()
export class PropRepository implements IPropRepository {
  constructor(
    @InjectRepository(PropertyEntity)
    private readonly propRepository: Repository<PropertyEntity>,
    private readonly dataSource: DataSource,
  ) {}

  findAll(): Promise<PropertyEntity[]> {
    return this.propRepository.find({ where: { deletedAt: IsNull() } });
  }

  createBatch(props: PropertyEntity[]): Promise<PropertyEntity[]> {
    return this.dataSource.transaction(async (manager) => {
      return manager.save(props);
    });
  }
}
