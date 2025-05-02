import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('properties')
export class PropertyEntity extends BaseEntity {
  @Column({ type: 'text', unique: true })
  name: string;

  @Column({ name: 'position_id', type: 'int' })
  positionId: number;
}
