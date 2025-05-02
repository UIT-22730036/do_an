import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CardEntity,
  ClassEntity,
  LogEntity,
  PositionEntity,
  PropertyEntity,
  StudentEntity,
} from 'src/core/entities';
import * as dotenv from 'dotenv';
import { StudentRepository } from './students/student.repository';
import { ClassRepository } from './class/class.repository';
import { CardRepository } from './cards/card.repository';
import { PositionRepository } from './positions/position.repository';
import { LogRepository } from './logs/log.repository';
import { PropRepository } from './properties/properties.repository';
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
      entities: [
        StudentEntity,
        ClassEntity,
        CardEntity,
        PositionEntity,
        LogEntity,
        PropertyEntity,
      ],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([
      StudentEntity,
      ClassEntity,
      CardEntity,
      PositionEntity,
      LogEntity,
      PropertyEntity,
    ]),
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
    {
      provide: 'CARD_REPOSITORY',
      useClass: CardRepository,
    },
    {
      provide: 'POSITION_REPOSITORY',
      useClass: PositionRepository,
    },
    {
      provide: 'LOG_REPOSITORY',
      useClass: LogRepository,
    },
    {
      provide: 'PROPERTY_REPOSITORY',
      useClass: PropRepository,
    },
  ],
  exports: [
    'STUDENT_REPOSITORY',
    'CLASS_REPOSITORY',
    'CARD_REPOSITORY',
    'POSITION_REPOSITORY',
    'LOG_REPOSITORY',
    'PROPERTY_REPOSITORY',
  ],
})
export class InfrastructuresModule {}
