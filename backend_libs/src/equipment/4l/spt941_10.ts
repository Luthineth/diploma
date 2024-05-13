export interface TSPT941_10 extends Logika4L {
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
    IdentWord: number;
    SupportsBaudRateChangeRequests: boolean;
    MaxBaudRate: number;
    SessionTimeout: string;
    SupportsFastSessionInit: boolean;
}