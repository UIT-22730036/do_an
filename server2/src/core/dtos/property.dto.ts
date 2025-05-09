import { PositionEntity, PropertyEntity } from '../entities';

export class CreatePropDto {
  positionId: number;
  name: string;
}

export class PropertyDto extends PropertyEntity {
  position: PositionEntity;
}

export class UpdatePropDto {
  name: string;
}
