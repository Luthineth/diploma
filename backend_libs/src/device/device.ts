import { ApiProperty } from "@nestjs/swagger";

export class Device {
    constructor(uid:string, deviceName:string, ip:string, port:number){
        this.uid = uid;
        this.deviceName = deviceName;
        this.ip = ip;
        this.port = port;
    }


    @ApiProperty({ description: 'UID устройства', example: 'abcdef'})
    uid: string; 

    @ApiProperty({ description: 'Имя устройства', example: 'СПТ943 мод. 3'})
    deviceName: string;    

    @ApiProperty({ description: 'IP адрес', example: '11.22.33.44'})    
    ip : string;

    @ApiProperty({ description: 'IP порт', example: 8080 })    
    port: number;    
}


export class DeviceReply{
    constructor(devices:Device[]){
        this.deivces = devices;
    }

    @ApiProperty({ description: 'Список подключенных устройств', type: [Device]}) 
    deivces: Device[] = []
}

export enum DeviceConnectionStatus{
    Connected = "Connected",
    Disconnected = "Disconnected",
    Connecting = "Connecting",
    Disconnecting = "Disconnecting",
    Unknown = "Unknown"
}

export class DeviceStatus {
    constructor(device:Device, status:DeviceConnectionStatus){
        this.device = device;
        this.status = status;
    }

    @ApiProperty({ description: 'Устройство'})    
    device: Device;

    @ApiProperty({ description: 'Состояние устрйоства'})    
    status: DeviceConnectionStatus
} 

export class DeviceNotFoundException extends  Error {
    
}