export enum ConnectionType {
    Offline = -1,
    Serial = 0,
    Modem = 1,
    TCP = 2,
    UDP = 3,
    Radius = 4
}

export enum PurgeFlags {
    RX,
    TX
}

export enum ConnectionState {
    NotConnected = 0,
    Connecting = 1,
    Connected = 2,
    Disconnecting = 3
}

export interface Connection {
    address: string;
    TxByteCount: number;
    RxByteCount: number;
    ResourceName: string;
    State: ConnectionState;
    ReadTimeout: number;
    LastRXTime: string;
}

export enum MonitorEventType {
    Open,
    Close,
    ChannelPropertiesChanged,
    Tx,
    Rx,
    Purge,
    Error,
    Undefined
}

export interface MonitorEvent {
    timestamp: string;
    evtType: MonitorEventType;
    address: string;
    data: string;
    info: string;
}