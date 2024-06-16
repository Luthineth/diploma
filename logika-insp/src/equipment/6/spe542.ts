import { Logika6 } from "../logika6";
import { MeasureKind } from "../types";

export interface TSPE542 extends Logika6 {
    SupportedByProlog4: boolean;
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
    ChannelsPerCluster: number;
    GroupsPerCluster: number;
}