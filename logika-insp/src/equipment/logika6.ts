import { Meter } from "./meter";
import { BusProtocolType } from "./types";

export interface Logika6 extends Meter {
    Outdated: boolean;
    BusType: BusProtocolType;
    FamilyName: string;
    SupportedByProlog4: boolean;
}