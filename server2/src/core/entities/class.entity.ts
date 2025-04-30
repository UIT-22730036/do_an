import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('class')
export class ClassEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'ma_lop' })
  maLop: number;

  @Column({ name: 'ten_lop', unique: true })
  tenLop: string;

  @Column({ name: 'so_sv', default: 0 })
  soSv: number;
}
