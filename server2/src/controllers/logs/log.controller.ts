import { Controller, Get, Inject } from '@nestjs/common';
import { LogEntity } from 'src/core/entities';
import { LogUseCase } from 'src/usecases/logs/log.usecase';

interface ILogController {
  findAll(): Promise<LogEntity[]>;
}

@Controller('logs')
export class LogController implements ILogController {
  constructor(
    @Inject('LOG_USE_CASE')
    private readonly logUseCase: LogUseCase,
  ) {}

  @Get()
  findAll(): Promise<LogEntity[]> {
    return this.logUseCase.findAll();
  }
}
