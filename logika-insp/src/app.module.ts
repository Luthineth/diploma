import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { DeviceModule } from './device/device.module';
import { DeviceService } from './device/device.service';
import { DeviceController } from './device/device.controller';
import { OperationsController } from './operations/operations.controller';
import { OperationsModule } from './operations/operations.module';

@Module({
  imports: [HealthModule, DeviceModule, OperationsModule],
  controllers: [
    AppController,
    OperationsController, 
    //DeviceController
  ],
  providers: [
    AppService, 
    //DeviceService
  ],
})
export class AppModule {}
