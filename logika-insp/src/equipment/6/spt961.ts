import { Logika6 } from "../logika6";
import { MeasureKind } from "../types";

export interface TSPT961 extends Logika6 {
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
}