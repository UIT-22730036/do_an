import { Inject, Injectable } from '@nestjs/common';
import { CreatePropDto } from 'src/core/dtos';
import { PropertyEntity } from 'src/core/entities';
import { PropRepository } from 'src/infrastructures/properties/properties.repository';

interface IPropUseCase {
  findAll(): Promise<PropertyEntity[]>;
  createBatch(data: CreatePropDto[]): Promise<PropertyEntity[]>;
}

@Injectable()
export class PropUseCase implements IPropUseCase {
  constructor(
    @Inject('PROPERTY_REPOSITORY')
    private readonly propRepo: PropRepository,
  ) {}

  findAll(): Promise<PropertyEntity[]> {
    return this.propRepo.findAll();
  }

  createBatch(data: CreatePropDto[]): Promise<PropertyEntity[]> {
    const props = [];
    for (const item of data) {
      const prop = new PropertyEntity();

      prop.positionId = item.positionId;
      prop.name = item.name;

      props.push(prop);
    }

    return this.propRepo.createBatch(props);
  }
}
