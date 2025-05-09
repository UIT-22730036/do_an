import { Inject, Injectable } from '@nestjs/common';
import { CreatePropDto, PropertyDto, UpdatePropDto } from 'src/core/dtos';
import { PropertyEntity } from 'src/core/entities';
import { PositionRepository } from 'src/infrastructures/positions/position.repository';
import { PropRepository } from 'src/infrastructures/properties/properties.repository';

interface IPropUseCase {
  findAll(): Promise<PropertyDto[]>;
  create(data: CreatePropDto): Promise<PropertyEntity>;
  createBatch(data: CreatePropDto[]): Promise<PropertyEntity[]>;
  update(id: number, data: UpdatePropDto): Promise<PropertyEntity>;
  delete(id: number);
}

@Injectable()
export class PropUseCase implements IPropUseCase {
  constructor(
    @Inject('PROPERTY_REPOSITORY')
    private readonly propRepo: PropRepository,
    @Inject('POSITION_REPOSITORY')
    private readonly positionRepo: PositionRepository,
  ) {}

  async findAll(): Promise<PropertyDto[]> {
    const props = await this.propRepo.findAll();

    const propsWithPosition = await Promise.all(
      props.map(async (prop) => {
        const position = await this.positionRepo.findById(prop.positionId);
        return {
          ...prop,
          position,
        };
      }),
    );

    return propsWithPosition;
  }

  create(data: CreatePropDto): Promise<PropertyEntity> {
    const prop = new PropertyEntity();

    prop.positionId = data.positionId;
    prop.name = data.name;

    return this.propRepo.create(prop);
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

  async update(id: number, data: UpdatePropDto): Promise<PropertyEntity> {
    const prop = await this.propRepo.findById(id);

    if (!prop) {
      throw new Error('Property not found');
    }

    prop.name = data.name;

    return this.propRepo.update(id, prop);
  }

  delete(id: number) {
    return this.propRepo.delete(id);
  }
}
