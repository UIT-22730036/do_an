import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PositionEntity } from 'src/core/entities';
import { DataSource, IsNull, Repository } from 'typeorm';

interface IPositionRepository {
  findAll(): Promise<PositionEntity[]>;
  findById(id: number): Promise<PositionEntity>;
  createBatch(positions: PositionEntity[]): Promise<PositionEntity[]>;
  delete(id: number);
}

@Injectable()
export class PositionRepository implements IPositionRepository {
  constructor(
    @InjectRepository(PositionEntity)
    private readonly positionRepository: Repository<PositionEntity>,
    private readonly dataSource: DataSource,
  ) {}

  findAll(): Promise<PositionEntity[]> {
    return this.positionRepository.find({
      where: { deletedAt: IsNull() },
      order: { id: 'ASC' },
    });
  }

  findById(id: number): Promise<PositionEntity> {
    return this.positionRepository.findOne({
      where: { id, deletedAt: IsNull() },
    });
  }

  createBatch(positions: PositionEntity[]): Promise<PositionEntity[]> {
    return this.dataSource.transaction(async (manager) => {
      return manager.save(positions);
    });
  }

  delete(id: number) {
    return this.positionRepository.softDelete(id);
  }
}
