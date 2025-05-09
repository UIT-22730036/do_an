import { Inject, Injectable } from '@nestjs/common';
import { CreatePositionDto } from 'src/core/dtos';
import { PositionEntity } from 'src/core/entities';
import { PositionRepository } from 'src/infrastructures/positions/position.repository';

interface IPositionUseCase {
  findAll(): Promise<PositionEntity[]>;
  createBatch(data: CreatePositionDto[]): Promise<PositionEntity[]>;
  delete(id: number);
}

@Injectable()
export class PositionUseCase implements IPositionUseCase {
  constructor(
    @Inject('POSITION_REPOSITORY')
    private readonly positionRepository: PositionRepository,
  ) {}

  findAll(): Promise<PositionEntity[]> {
    return this.positionRepository.findAll();
  }

  createBatch(data: CreatePositionDto[]): Promise<PositionEntity[]> {
    const positions = [];
    for (const item of data) {
      const position = new PositionEntity();

      position.name = item.name;
      position.lats = item.lats;
      position.lngs = item.lngs;
      position.type = item.type;

      positions.push(position);
    }

    return this.positionRepository.createBatch(positions);
  }

  delete(id: number) {
    return this.positionRepository.delete(id);
  }
}
