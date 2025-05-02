import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('cards')
export class CardEntity extends BaseEntity {
  @Column({ name: 'student_id' })
  studentId: number;

  @Column({ name: 'expired_at' })
  expiredAt: Date;
}
