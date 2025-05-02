import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('positions')
export class PositionEntity extends BaseEntity {
  @Column()
  type: string;

  @Column({ type: 'text', unique: true })
  name: string;

  @Column({ type: 'float', array: true, default: [] })
  lngs: number[];

  @Column({ type: 'float', array: true, default: [] })
  lats: number[];
}
