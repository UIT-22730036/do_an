import { Module } from '@nestjs/common';
import { StudentController } from './students/student.controller';
import { UseCaseModule } from 'src/usecases';
import { ClassController } from './class/class.controller';
import { CardController } from './cards/card.controller';
import { CsvController } from './csv/csv.controller';
import { PositionController } from './positions/positions.controller';
import { LogController } from './logs/log.controller';
import { PropController } from './properties/properties.controller';

@Module({
  imports: [UseCaseModule],
  controllers: [
    StudentController,
    ClassController,
    CardController,
    CsvController,
    PositionController,
    LogController,
    PropController,
  ],
})
export class ControllerModule {}
