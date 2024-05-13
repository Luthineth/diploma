import { Tag } from "./tag";
import { ArchiveType } from "./types";

export interface ArchiveField extends Tag {
    Caption: string;
    archiveOrd: number;
    ArchiveType: ArchiveType;
    DisplayFormat: string;
    Address: string;
}