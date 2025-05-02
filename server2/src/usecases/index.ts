import { Module } from '@nestjs/common';
import { StudentUseCase } from './students/student.usecase';
import { InfrastructuresModule } from 'src/infrastructures';
import { ClassUseCase } from './class/class.usecase';
import { CardUseCase } from './cards/card.usecase';
import { CsvService } from './csv/csv.service';
import { PositionUseCase } from './positions/positions.usecase';
import { LogUseCase } from './logs/log.usecase';
import { PropUseCase } from './properties/properties.usecase';

@Module({
  imports: [InfrastructuresModule],
  providers: [
    {
      provide: 'STUDENT_USE_CASE',
      useClass: StudentUseCase,
    },
    {
      provide: 'CLASS_USE_CASE',
      useClass: ClassUseCase,
    },
    {
      provide: 'CARD_USE_CASE',
      useClass: CardUseCase,
    },
    {
      provide: 'CSV_SERVICE',
      useClass: CsvService,
    },
    {
      provide: 'POSITION_USE_CASE',
      useClass: PositionUseCase,
    },
    {
      provide: 'LOG_USE_CASE',
      useClass: LogUseCase,
    },
    {
      provide: 'PROPERTY_USE_CASE',
      useClass: PropUseCase,
    },
  ],
  exports: [
    'STUDENT_USE_CASE',
    'CLASS_USE_CASE',
    'CARD_USE_CASE',
    'CSV_SERVICE',
    'POSITION_USE_CASE',
    'LOG_USE_CASE',
    'PROPERTY_USE_CASE',
  ],
})
export class UseCaseModule {}
