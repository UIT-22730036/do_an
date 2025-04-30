import { Module } from '@nestjs/common';
import { StudentUseCase } from './students/student.usecase';
import { InfrastructuresModule } from 'src/infrastructures';
import { ClassUseCase } from './class/class.usecase';

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
  ],
  exports: ['STUDENT_USE_CASE', 'CLASS_USE_CASE'],
})
export class UseCaseModule {}
