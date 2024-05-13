import { ArchiveType } from "./types";
import { Meter } from "./meter";

export interface  DataTable{
    // TODO : Port  from System.Data.DataTable
}

export interface Archive {
    Meter: Meter;
    ArchiveType: ArchiveType;
}

export interface IntervalArchive extends Archive {
    Fields: ArchiveFieldCollection;
    Table: DataTable;
}

export interface ArchiveFieldCollection {
    Count: number;
    SyncRoot: any;
    IsSynchronized: boolean;
    IsReadOnly: boolean;
}

export interface ServiceRecord {
    tm: string;
    event: string;
    description: string;
}

export interface ServiceArchive extends Archive {
    Records: ServiceRecord[];
}