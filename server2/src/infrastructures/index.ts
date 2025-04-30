import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassEntity, StudentEntity } from 'src/core/entities';
import * as dotenv from 'dotenv';
import { StudentRepository } from './students/student.repository';
import { ClassRepository } from './class/class.repository';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_EXPOSE_PORT) ?? 5432,
      username: process.env.DB_USERNAME ?? '',
      password: process.env.DB_PASSWORD ?? '',
      database: process.env.DB_DATABASE ?? '',
      logging: true,
      entities: [StudentEntity, ClassEntity],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([StudentEntity, ClassEntity]),
  ],
  providers: [
    {
      provide: 'STUDENT_REPOSITORY',
      useClass: StudentRepository,
    },
    {
      provide: 'CLASS_REPOSITORY',
      useClass: ClassRepository,
    },
  ],
  exports: ['STUDENT_REPOSITORY', 'CLASS_REPOSITORY'],
})
export class InfrastructuresModule {}
