import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('logs')
export class LogEntity extends BaseEntity {
  @Column({ name: 'card_id', type: 'int' })
  cardId: number;

  @Column({ name: 'position_id', type: 'int' })
  positionId: number;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  time: Date;
}
