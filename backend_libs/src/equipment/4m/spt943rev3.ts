export interface TSPT943rev3 extends Logika4M {
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
    IdentWord: number;
    SupportsBaudRateChangeRequests: boolean;
    MaxBaudRate: number;
    SessionTimeout: string;
    SupportsArchivePartitions: boolean;
    SupportsFLZ: boolean;
}