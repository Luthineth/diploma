export interface SPBusPacket {
    DLE: number;
    Length: number;
    DAD: number | null;
    SAD: number | null;
    DataHead: string;
    Func: BusOperation;
    DataField: string;
    Records: ReadonlyRecordCollection;
    RawSource: string;
}

export interface ReadonlyFieldCollection {
    FieldCount: number;
    Fields: ReadonlyFieldCollection;
}

export interface ReadonlyRecordCollection {
    Count: number;
}

export enum ParseFlags {
    None,
    ExpectNoHeader
}