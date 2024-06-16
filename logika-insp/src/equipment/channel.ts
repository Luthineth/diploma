import { Meter } from "./meter";

export enum ChannelKind {
    Undefined,
    Common,
    Channel,
    Group,
    TV
}

export interface ChannelDef {
    Meter: Meter;
    Kind: ChannelKind;
    Prefix: string;
    Start: number;
    Count: number;
    Description: string;
}

export interface Channel extends ChannelDef {
    No: number;
    Name: string;
}