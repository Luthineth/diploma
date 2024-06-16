import { MeasureKind } from "./types";
import { BusProtocolType } from "./types";
import { ArchiveDef } from "./archive-def";
import { ArchiveFieldDef } from "./archive-field-def"; 
import { ChannelDef } from "./channel";
import { DataTagDef } from "./tag-def";

export interface Meter {
    MeasureKind: MeasureKind;
    Caption: string;
    Description: string;
    MaxChannels: number;
    MaxGroups: number;
    SupportedByProlog4: boolean;
    Outdated: boolean;
    VendorID: string;
    Vendor: string;
    BusType: BusProtocolType;
    dfTemperature: string;
    Archives: ArchiveDef[];
    ArchiveFields: ArchiveFieldDef[];
    Channels: ChannelDef[];
    FamilyName: string;
    Tags: TagVault;
    SupportsParamsDbChecksum: boolean;
}

export interface TagVault {
    All: DataTagDef[];
}