import { Logika4L } from "./logika4-l";
import { MeasureKind } from "../types";

export interface TSPT943 extends Logika4L {
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