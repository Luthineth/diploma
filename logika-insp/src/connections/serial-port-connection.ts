import { SerialConnection } from "./serial-connection";
import { BaudRate } from "./serial-connection";

export interface SerialPort {
 // TODO : Port from  System.IO.Ports.SerialPort Later
}

export interface SerialPortConnection extends SerialConnection {
    port: SerialPort;
    ResourceName: string;
    BaudRate: BaudRate;
}