import { Logika6 } from "../logika6";
import { MeasureKind } from "../types";

export interface TSPT961M extends Logika6 {
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
}