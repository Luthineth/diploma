import { Logika6N } from "./logika6-n";
import { MeasureKind } from "../types";

export interface TSPT963 extends Logika6N {
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
}