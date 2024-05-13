import { Connection } from "./connection";

export interface SerialConnection extends Connection {
    CanChangeBaudrate: boolean;
    BaudRate: BaudRate;
}

export enum BaudRate {
    Undefined = 0,
    b1200 = 1200,
    b2400 = 2400,
    b4800 = 4800,
    b9600 = 9600,
    b19200 = 19200,
    b38400 = 38400,
    b57600 = 57600,
    b115200 = 115200
}

export enum StopBits {
    One = 0,
    Two = 2
}

export enum Parity {
    None = 0,
    Odd = 1,
    Even = 2
}