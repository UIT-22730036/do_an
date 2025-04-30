import { Module } from '@nestjs/common';
import { StudentController } from './students/student.controller';
import { UseCaseModule } from 'src/usecases';
import { ClassController } from './class/class.controller';

@Module({
  imports: [UseCaseModule],
  controllers: [StudentController, ClassController],
})
export class ControllerModule {}
