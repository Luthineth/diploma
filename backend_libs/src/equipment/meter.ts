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