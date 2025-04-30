import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('students')
export class StudentEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'ma_sv' })
  maSv: string;

  @Column({ name: 'ma_lop' })
  maLop: number;

  @Column({ name: 'ten_sv' })
  tenSv: string;

  @Column({ name: 'email', unique: true })
  email: string;
}
