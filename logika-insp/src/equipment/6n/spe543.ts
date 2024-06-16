import { Logika6N } from "./logika6-n";
import { MeasureKind } from "../types";

export interface TSPE543 extends Logika6N {
    SupportedByProlog4: boolean;
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
}