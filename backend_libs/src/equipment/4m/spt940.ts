export interface TSPT940 extends Logika4M {
    IdentWord: number;
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
    SupportsBaudRateChangeRequests: boolean;
    MaxBaudRate: number;
    SessionTimeout: string;
    SupportsArchivePartitions: boolean;
    SupportsFLZ: boolean;
}