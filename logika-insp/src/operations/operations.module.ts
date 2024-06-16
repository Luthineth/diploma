import { Module } from '@nestjs/common';
import { OperationsController } from './operations.controller';
import { HardwareOperationsService } from './hardware.operations.service';
import { MockOperationsService } from './mock.operations.service';

@Module({
    providers:[
        MockOperationsService,
        HardwareOperationsService,
    ],    
    exports:[
        MockOperationsService,
        HardwareOperationsService,
    ],
    controllers: [        
        OperationsController
    ],
})
export class OperationsModule {

}
