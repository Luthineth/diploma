import { ArchiveType } from "./types";
import { TagDef } from "./tag-def";
import { ArchiveDef } from "./archive-def";

export interface ArchivingElement {
    ArchiveType: ArchiveType;
}

export interface ArchiveFieldDef extends TagDef {
    ArchiveType: ArchiveType;
}

export interface ArchiveFieldDef6 extends ArchiveFieldDef {
    NameSuffixed: string;
    Address: string;
    Key: string;
}

export interface ArchiveFieldDef4 extends ArchiveFieldDef {
    Archive: ArchiveDef;
    Units: string;
    Key: string;
}

export interface ArchiveFieldDef4L extends ArchiveFieldDef4 {
    InternalType: BinaryType;
    FieldOffset: number;
}

export interface ArchiveFieldDef4M extends ArchiveFieldDef4 {
    FieldIndex: number;
}