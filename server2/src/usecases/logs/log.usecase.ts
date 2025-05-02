import { Inject, Injectable } from '@nestjs/common';
import { CreateLogDto } from 'src/core/dtos';
import { LogEntity } from 'src/core/entities';
import { LogRepository } from 'src/infrastructures/logs/log.repository';

interface ILogUseCase {
  findAll(): Promise<LogEntity[]>;
  createBatch(data: CreateLogDto[]): Promise<LogEntity[]>;
}

@Injectable()
export class LogUseCase implements ILogUseCase {
  constructor(
    @Inject('LOG_REPOSITORY')
    private readonly logRepository: LogRepository,
  ) {}

  findAll(): Promise<LogEntity[]> {
    return this.logRepository.findAll();
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
