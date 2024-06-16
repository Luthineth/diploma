import { Controller, Get, Post, Param, HttpCode, Logger, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { 
    LoadCurrentMetricsRequest, 
    LoadCurrentMetricsReply,
    LoadArchiveMetricsRequest,
    LoadArchiveMetricsReply,
    ParameterModifyRequest,
    ParameterModifyReply
} from './operations';


import { OperationsService } from './operations.service';
import { HardwareOperationsService } from './hardware.operations.service';
import { MockOperationsService } from './mock.operations.service';


@Controller('/api/operations')
@ApiTags('Операции с приборами')
export class OperationsController {
    private readonly logger = new Logger(OperationsController.name);
    private readonly useMocks = true;

    constructor(        
        private readonly hardwareOperationsService: HardwareOperationsService,
        private readonly mockOperationsService: MockOperationsService
    ) {}

    @Post("/metrics/current")
    @HttpCode(200)
    @ApiOperation({summary: "Запросить текущие значения прибора"})
    @ApiOkResponse({ type: LoadCurrentMetricsReply, description: "Текущие значения прибора"})
    async loadCurrentMetrics(@Body() request: LoadCurrentMetricsRequest): Promise<LoadCurrentMetricsReply> {        
        this.logger.log(`loadCurrentMetrics : ${request}`);
        return this.operationsService().loadCurrentMetrics(request);
    }
    @Post("/metrics/archive")
    @HttpCode(200)
    @ApiOperation({summary: "Запросить архивные значения прибора"})
    @ApiOkResponse({ type: LoadArchiveMetricsReply, description: "Архивные значения прибора"})
    async loadArchiveMetrics(@Body() request: LoadArchiveMetricsRequest): Promise<LoadArchiveMetricsReply> {
        this.logger.log(`loadArchiveMetrics : ${request}`);
        return this.operationsService().loadArchiveMetrics(request);
    }

    @Post("/parameter/modify")
    @HttpCode(200)
    @ApiOperation({summary: "Модифицировать значение параметра"})
    @ApiOkResponse({ type: ParameterModifyReply, description: "Операция выполнена"})
    async modifyParameter(@Body() request: ParameterModifyRequest): Promise<ParameterModifyReply> {
        this.logger.log(`modifyParameter : ${request}`);
        return this.operationsService().modifyParameter(request);
    }

    private operationsService(): OperationsService {
        return this.useMocks ? this.mockOperationsService : this.hardwareOperationsService;
    }
}
