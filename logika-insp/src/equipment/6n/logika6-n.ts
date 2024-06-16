import { Logika6 } from "../logika6";

export interface Logika6N extends Logika6 {
    Outdated: boolean;
    MaxChannels: number;
    MaxGroups: number;
    dfNS: string;
}