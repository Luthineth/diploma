export enum MeasureKind {
    T,
    G,
    E
}

export enum BusProtocolType {
    SPbus = 6,
    RSbus = 4
}

export enum TagKind {
    Undefined = 0,
    Parameter = 1,
    Info = 2,
    Realtime = 3,
    TotalCtr = 4
}

export enum ArchiveTimingType {
    None,
    Synchronous,
    Asynchronous
}

export interface ArchiveType {
    Name: string;
    Acronym: string;
    Description: string;
    Interval: string;
    VariableInterval: boolean;
    IsIntervalArchive: boolean;
    IsServiceArchive: boolean;
}

export interface VQT {
    Value: any;
    Quality: number;
    Timestamp: string;
}

export interface HistoricalSeries {
    ClientHandle: number;
    Data: VQT[];
}

export enum ImportantTag {
    Ident,
    Model,
    SerialNo,
    NetAddr,
    RDay,
    RHour,
    EngUnits,
    ParamsCSum
}

export interface VitalInfo {
    id: string;
    hwRev: string;
    hwSerial: string;
    intfConfig: string[];
    nt: number | null;
    rd: number | null;
    rh: number | null;
    mtrParamsHash: string;
    clockDiff: string | null;
}

export interface ColumnInfo {
    name: string;
    dataType: string;
    nullable: boolean;
}