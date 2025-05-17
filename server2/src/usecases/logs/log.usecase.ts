import { Inject, Injectable } from '@nestjs/common';
import { CreateLogDto } from 'src/core/dtos';
import { LogEntity } from 'src/core/entities';
import { LogRepository } from 'src/infrastructures/logs/log.repository';
import { PositionRepository } from 'src/infrastructures/positions/position.repository';

interface ILogUseCase {
  findAll(): Promise<LogEntity[]>;
  createBatch(data: CreateLogDto[]): Promise<LogEntity[]>;
}

@Injectable()
export class LogUseCase implements ILogUseCase {
  constructor(
    @Inject('LOG_REPOSITORY')
    private readonly logRepository: LogRepository,
    @Inject('POSITION_REPOSITORY')
    private readonly positionRepository: PositionRepository,
  ) {}

  async findAll(): Promise<LogEntity[]> {
    const positions = [];
    const logs = await this.logRepository.findAll();

    for (const log of logs) {
      const position = await this.positionRepository.findById(log.positionId);
      positions.push(position);
    }

    return logs.map((log, index) => ({
      ...log,
      position: positions[index],
    }));
  }

  createBatch(data: CreateLogDto[]): Promise<LogEntity[]> {
    const logs = [];
    for (const item of data) {
      const log = new LogEntity();

      log.cardId = item.cardId;
      log.positionId = item.positionId;
      log.time = new Date(item.time);

      logs.push(log);
    }

    return this.logRepository.createBatch(logs);
  }
}
