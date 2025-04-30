import { Module } from '@nestjs/common';
import { ControllerModule } from './controllers';
import { UseCaseModule } from './usecases';
import { InfrastructuresModule } from './infrastructures';

@Module({
  imports: [ControllerModule, UseCaseModule, InfrastructuresModule],
})
export class AppModule {}
