export interface TSPT941 extends Logika4L {
    IdentWord: number;
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
    SupportedByProlog4: boolean;
    SupportsBaudRateChangeRequests: boolean;
    MaxBaudRate: number;
    SessionTimeout: string;
    SupportsFastSessionInit: boolean;
}