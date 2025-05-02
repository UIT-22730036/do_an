import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogEntity } from 'src/core/entities';
import { DataSource, IsNull, Repository } from 'typeorm';

interface ILogRepository {
  findAll(): Promise<LogEntity[]>;
  createBatch(logs: LogEntity[]): Promise<LogEntity[]>;
}

@Injectable()
export class LogRepository implements ILogRepository {
  constructor(
    @InjectRepository(LogEntity)
    private readonly logRepository: Repository<LogEntity>,
    private readonly dataSource: DataSource,
  ) {}

  findAll(): Promise<LogEntity[]> {
    return this.logRepository.find({ where: { deletedAt: IsNull() } });
  }

  createBatch(logs: LogEntity[]): Promise<LogEntity[]> {
    return this.dataSource.transaction(async (manager) => {
      return manager.save(logs);
    });
  }
}
