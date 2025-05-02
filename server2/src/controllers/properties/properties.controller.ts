import { Controller, Get, Inject } from '@nestjs/common';
import { PropertyEntity } from 'src/core/entities';
import { PropUseCase } from 'src/usecases/properties/properties.usecase';

interface IPropController {
  findAll(): Promise<PropertyEntity[]>;
}

@Controller('property')
export class PropController implements IPropController {
  constructor(
    @Inject('PROPERTY_USE_CASE')
    private readonly propUseCase: PropUseCase,
  ) {}

  @Get()
  findAll(): Promise<PropertyEntity[]> {
    return this.propUseCase.findAll();
  }
}
