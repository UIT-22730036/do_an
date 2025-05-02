import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('students')
export class StudentEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'class_id' })
  classId: number;

  @Column({ type: 'float' })
  lng: number;

  @Column({ type: 'float' })
  lat: number;
}
