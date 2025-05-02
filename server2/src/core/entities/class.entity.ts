import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('class')
export class ClassEntity extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column({ name: 'student_count', default: 0 })
  studentCount: number;
}
