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

@Controller('/api/operations')
@ApiTags('Операции с приборами')
export class OperationsController {
    private readonly logger = new Logger(OperationsController.name);


    @Post("/metrics/current")
    @HttpCode(200)
    @ApiOperation({summary: "Запросить текущие значения прибора"})
    @ApiOkResponse({ type: LoadCurrentMetricsReply, description: "Текущие значения прибора"})
    async loadCurrentMetrics(@Body() request: LoadCurrentMetricsRequest): Promise<LoadCurrentMetricsReply> {
        this.logger.log("loadCurrentMetrics")
        return new LoadCurrentMetricsReply()
    }

    @Post("/metrics/archive")
    @HttpCode(200)
    @ApiOperation({summary: "Запросить архивные значения прибора"})
    @ApiOkResponse({ type: LoadArchiveMetricsReply, description: "Архивные значения прибора"})
    async loadArchiveMetrics(@Body() request: LoadArchiveMetricsRequest): Promise<LoadArchiveMetricsReply> {
        this.logger.log("loadArchiveMetrics")
        return new LoadArchiveMetricsReply()
    }

    @Post("/parameter/modify")
    @HttpCode(200)
    @ApiOperation({summary: "Модифицировать значение параметра"})
    @ApiOkResponse({ type: ParameterModifyReply, description: "Операция выполнена"})
    async modifyParameter(@Body() request: ParameterModifyRequest): Promise<ParameterModifyReply> {
        this.logger.log("modifyParameter")
        return new ParameterModifyReply()
    }
}
