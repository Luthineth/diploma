export interface Logika4M extends Logika4 {
    ND_STR: string;
    SupportsFastSessionInit: boolean;
    SupportsFLZ: boolean;
    SupportsArchivePartitions: boolean;
    FamilyName: string;
    SupportedByProlog4: boolean;
}

export enum OperParamFlag {
    No = 0,
    Yes = 1
}

export interface AdsTagBlock {
    id: number;
    chns: number[];
    ords: number[];
}