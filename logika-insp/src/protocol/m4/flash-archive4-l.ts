
import { MeterInstance } from "./m4-protocol_-api";
import { Logika4L } from "src/equipment/4l/logika4-l";
import { ArchiveType } from "src/equipment/types";

export interface Logika4LTVReadState {

}

export interface Logika4LArchiveRequestState {

}

export interface FlashArchive4 {
    mi: MeterInstance;
    Meter: Logika4L;
    ArchiveType: ArchiveType;
}

export interface SyncFlashArchive4 extends FlashArchive4 {

}

export interface AsyncFlashArchive4 extends FlashArchive4 {

}