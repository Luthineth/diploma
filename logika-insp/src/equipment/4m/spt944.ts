import { Logika4M } from "./logika4-m";
import { MeasureKind } from "../types";

export interface TSPT944 extends Logika4M {
    IdentWord: number;
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
    SupportsBaudRateChangeRequests: boolean;
    MaxBaudRate: number;
    SessionTimeout: string;
    SupportsFLZ: boolean;
    SupportsArchivePartitions: boolean;
}