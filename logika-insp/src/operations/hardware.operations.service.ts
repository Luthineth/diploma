import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

import { LoadCurrentMetricsRequest, LoadCurrentMetricsReply, LoadArchiveMetricsRequest, LoadArchiveMetricsReply, ParameterModifyRequest, ParameterModifyReply } from "./operations";
import { OperationsService } from "./operations.service";

@Injectable()
export class HardwareOperationsService implements OperationsService{
    private readonly logger = new Logger(HardwareOperationsService.name);

    async loadCurrentMetrics(request: LoadCurrentMetricsRequest): Promise<LoadCurrentMetricsReply> {
        throw new Error("Method not implemented.");
    }
    async loadArchiveMetrics(request: LoadArchiveMetricsRequest): Promise<LoadArchiveMetricsReply> {
        throw new Error("Method not implemented.");
    }
    async modifyParameter(request: ParameterModifyRequest): Promise<ParameterModifyReply> {
        throw new Error("Method not implemented.");
    }    

}