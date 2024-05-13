export interface Logika4L extends Logika4 {
    SupportedByProlog4: boolean;
    Outdated: boolean;
    FLASH_PAGE_SIZE: number;
    PARAMS_FLASH_ADDR: number;
    FamilyName: string;
}

export enum BinaryType {
    undefined = 0,
    r32,
    r32x3,
    time,
    date,
    MMDD,
    bitArray32,
    bitArray24,
    bitArray16,
    bitArray8,
    dbentry,
    dbentry_byte,
    u8,
    i32r32,
    MMHH,
    NSrecord,
    IZMrecord,
    archiveStruct,
    modelChar,
    u24,
    svcRecordTimestamp
}

export interface SyncRecordField {
    offset: number;
    binType: BinaryType;
}

export interface ADSFlashRun {
    Start: number;
    Length: number;
}