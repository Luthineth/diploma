import { Meter } from "./meter";
import { BusProtocolType } from "./types";
import { TagDef } from "./tag-def";

export interface Logika4 extends Meter {
    dfPressure: string;
    dfMass: string;
    dfVolume: string;
    dfFlow: string;
    dfEnergy: string;
    dfTimeInt: string;
    df0000: string;
    BusType: BusProtocolType;
    SupportsBaudRateChangeRequests: boolean;
    MaxBaudRate: number;
    SessionTimeout: string;
    SupportsFastSessionInit: boolean;
    IdentWord: number;
}

export interface CalcFieldDef extends TagDef {
    channelNo: number;
    insertAfter: string;
    expression: string;
    eu: string;
    Key: string;
}