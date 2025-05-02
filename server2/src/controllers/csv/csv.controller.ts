import {
  Controller,
  Inject,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CardUseCase } from 'src/usecases/cards/card.usecase';
import { CsvService } from 'src/usecases/csv/csv.service';
import { LogUseCase } from 'src/usecases/logs/log.usecase';
import { PositionUseCase } from 'src/usecases/positions/positions.usecase';
import { PropUseCase } from 'src/usecases/properties/properties.usecase';
import { StudentUseCase } from 'src/usecases/students/student.usecase';

@Controller('csv')
export class CsvController {
  constructor(
    @Inject('CSV_SERVICE')
    private readonly csvService: CsvService,
    @Inject('POSITION_USE_CASE')
    private readonly positionUseCase: PositionUseCase,
    @Inject('STUDENT_USE_CASE')
    private readonly studentUseCase: StudentUseCase,
    @Inject('LOG_USE_CASE')
    private readonly logUseCase: LogUseCase,
    @Inject('CARD_USE_CASE')
    private readonly cardUseCase: CardUseCase,
    @Inject('PROPERTY_USE_CASE')
    private readonly propUseCase: PropUseCase,
  ) {}
  @Post('upload/:type')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Param('type') type: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      return { error: 'No file uploaded' };
    }
    try {
      const results = await this.csvService.processCsvBuffer(file.buffer);

      switch (type) {
        case 'students':
          return this.studentUseCase.createBatch(results);

        case 'positions':
          return this.positionUseCase.createBatch(results);

        case 'logs':
          return this.logUseCase.createBatch(results);

        case 'cards':
          return this.cardUseCase.createBatch(results);

        case 'property':
          return this.propUseCase.createBatch(results);

        default:
          return {};
      }
    } catch (error) {
      return { error: 'Failed to process CSV', details: error.message };
    }
  }
}
