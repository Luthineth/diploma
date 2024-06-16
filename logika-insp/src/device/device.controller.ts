import { Controller, Get, Post, Param, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { DeviceService } from './device.service';
import { DeviceReply, DeviceStatus } from './device';

@Controller('/api/device')
@ApiTags('Управление подключениями к приборам')
export class DeviceController {
    constructor(
        private readonly deviceService: DeviceService
    ) {}

    @Get("/list")
    @ApiOperation({summary: "Получить список доступных приборов"})
    @ApiOkResponse({ type: DeviceReply, description: "Список подключенных устройств"})
    async listDevices(): Promise<DeviceReply> {
        return this.deviceService.listDevices().then((devices) => {
            return new DeviceReply(devices)
        })
    }

    @Post("/connect/:uid")
    @HttpCode(200)
    @ApiOperation({summary: "Подключиться к прибору"})
    @ApiOkResponse({ description: "Устройство подключено"})
    async connectDevices(@Param('deviceUid') deviceUid: string): Promise<void> {
        this.deviceService.connectDeviceByUid(deviceUid)        
    }

    @Post("/disconnect/:uid")
    @HttpCode(200)
    @ApiOperation({summary: "Отключиться от прибора"})
    @ApiOkResponse({ description: "Устройство отключено"})
    async diconnectDevices(@Param('deviceUid') deviceUid: string): Promise<void> {
        this.deviceService.disconnectDeviceByUid(deviceUid)        
    }

    @Get("/status/:uid")
    @HttpCode(200)
    @ApiOperation({summary: "Получить статус прибора"})
    @ApiOkResponse({ description: "Статус прибора"})
    async deviceStatus(@Param('deviceUid') deviceUid: string): Promise<DeviceStatus> {
        return this.deviceService.deviceStatus(deviceUid)        
    }
}
