export interface TSPT942 extends Logika4L {
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    IdentWord: number;
    MaxChannels: number;
    MaxGroups: number;
    SupportsBaudRateChangeRequests: boolean;
    MaxBaudRate: number;
    SessionTimeout: string;
    SupportsFastSessionInit: boolean;
}