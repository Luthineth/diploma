import { ItemDefBase } from "./item-def-base";
import { ArchiveType } from "./types";

export interface ArchiveDef extends ItemDefBase {
    ArchiveType: ArchiveType;
    Capacity: number;
}

export interface ArchiveDef6 extends ArchiveDef {
    Address: string;
}

export interface MultipartArchiveDef6 extends ArchiveDef {
    Ordinal: number;
    Ordinals: number[];
}

export interface ArchiveDef4L extends ArchiveDef {
    poorMans942: boolean;
    RecordSize: number;
    IndexAddr: number;
    HeadersAddr: number | null;
    RecordsAddr: number;
    IndexAddr2: number | null;
    HeadersAddr2: number | null;
    RecordsAddr2: number | null;
}

export interface ArchiveDef4M extends ArchiveDef {

}