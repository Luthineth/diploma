import { Logika4M } from "./logika4-m";
import { MeasureKind } from "../types";

export interface TLGK410 extends Logika4M {
    SupportedByProlog4: boolean;
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
    MaxBaudRate: number;
    SupportsBaudRateChangeRequests: boolean;
    SessionTimeout: string;
    SupportsFLZ: boolean;
    SupportsArchivePartitions: boolean;
    IdentWord: number;
}