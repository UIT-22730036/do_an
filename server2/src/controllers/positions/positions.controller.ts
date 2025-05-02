import { Controller, Get, Inject } from '@nestjs/common';
import { PositionEntity } from 'src/core/entities';
import { PositionUseCase } from 'src/usecases/positions/positions.usecase';

interface IPositionController {
  findAll(): Promise<PositionEntity[]>;
}

@Controller('positions')
export class PositionController implements IPositionController {
  constructor(
    @Inject('POSITION_USE_CASE')
    private readonly positionUseCase: PositionUseCase,
  ) {}

  @Get()
  findAll() {
    return this.positionUseCase.findAll();
  }
}
