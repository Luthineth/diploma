import { Meter } from "./meter";
import { ChannelDef } from "./channel";

export interface ItemDefBase {
    ChannelDef: ChannelDef;
    Meter: Meter;
    Ordinal: number;
    Name: string;
    Description: string;
    ElementType: string; // FIXME or Drop
}