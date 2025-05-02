import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PositionEntity } from 'src/core/entities';
import { DataSource, IsNull, Repository } from 'typeorm';

interface IPositionRepository {
  findAll(): Promise<PositionEntity[]>;
  createBatch(positions: PositionEntity[]): Promise<PositionEntity[]>;
}

@Injectable()
export class PositionRepository implements IPositionRepository {
  constructor(
    @InjectRepository(PositionEntity)
    private readonly positionRepository: Repository<PositionEntity>,
    private readonly dataSource: DataSource,
  ) {}

  findAll(): Promise<PositionEntity[]> {
    return this.positionRepository.find({ where: { deletedAt: IsNull() } });
  }

  createBatch(positions: PositionEntity[]): Promise<PositionEntity[]> {
    return this.dataSource.transaction(async (manager) => {
      return manager.save(positions);
    });
  }
}
