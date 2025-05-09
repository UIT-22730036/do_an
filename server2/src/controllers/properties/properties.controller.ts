import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePropDto, UpdatePropDto } from 'src/core/dtos';
import { PropertyEntity } from 'src/core/entities';
import { PropUseCase } from 'src/usecases/properties/properties.usecase';

interface IPropController {
  findAll(): Promise<PropertyEntity[]>;
  create(data: CreatePropDto): Promise<PropertyEntity>;
  update(id: number, data: UpdatePropDto): Promise<PropertyEntity>;
  delete(id: number);
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

  @Post('/create')
  create(@Body() data: CreatePropDto): Promise<PropertyEntity> {
    return this.propUseCase.create(data);
  }

  @Put('/update/:id')
  update(
    @Param('id') id: number,
    @Body() data: UpdatePropDto,
  ): Promise<PropertyEntity> {
    return this.propUseCase.update(id, data);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: number) {
    return this.propUseCase.delete(id);
  }
}
