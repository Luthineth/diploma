import { Injectable, Logger } from '@nestjs/common';
import { 
    Device, 
    DeviceStatus, 
    DeviceConnectionStatus, 
    DeviceNotFoundException
} from './device';

@Injectable()
export class DeviceService {
    private readonly logger = new Logger(DeviceService.name);

    private readonly devices: Device[] = [
        new Device("spt943.3", "СПТ943 мод. 3", "91.209.59.238", 8002)     
    ]

    private async findDeviceByUid(uid:string): Promise<Device> {
        const device = this.devices.find((device) =>{
            return device.uid == uid;
        })    

        if(device) return device;

        throw new DeviceNotFoundException(`Device Not Found: ${uid}`)
    }

    async listDevices(): Promise<Device[]> {    
        return this.devices;
    }

    async connectDeviceByUid(uid:string) : Promise<void> {
        return this.findDeviceByUid(uid).then((device)=>{
            this.logger.log(`connectDeviceByUid: ${uid}:${device.deviceName}`);
        })                          
    }

    async disconnectDeviceByUid(uid:string) : Promise<void> {
        return this.findDeviceByUid(uid).then((device)=>{
            this.logger.log(`disconnectDeviceByUid: ${uid}:${device.deviceName}`);
        })                  
    }

    async deviceStatus(uid:string): Promise<DeviceStatus> {    
        return this.findDeviceByUid(uid).then((device)=>{
            return new DeviceStatus(device, DeviceConnectionStatus.Connected);
        })          
    }
}
