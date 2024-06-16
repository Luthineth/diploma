import { Logika4M } from "./logika4-m";
import { MeasureKind } from "../types";

export interface TSPG742 extends Logika4M {
    IdentWord: number;
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
    SupportsBaudRateChangeRequests: boolean;
    MaxBaudRate: number;
    SessionTimeout: string;
    SupportsFastSessionInit: boolean;
    SupportsArchivePartitions: boolean;
    SupportsFLZ: boolean;
}