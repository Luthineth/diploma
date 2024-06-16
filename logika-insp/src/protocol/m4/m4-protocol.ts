import { Protocol } from "../protocol";
import { BaudRate } from "src/connections/serial-connection";
import { Logika4 } from "src/equipment/logika4";

export enum M4_MeterChannel {
    SYS = 0,
    TV1 = 1,
    TV2 = 2
}

export interface M4Protocol extends Protocol {
    BROADCAST: number;
    FRAME_START: number;
    FRAME_END: number;
    EXT_PROTO: number;
    MAX_RAM_REQUEST: number;
    MAX_TAGS_AT_ONCE: number;
    PARTITION_CURRENT: number;
    ALT_SPEED_FALLBACK_TIME: number;
    ArchivePartition: number;
    currentBaudRate: BaudRate;
    WAKE_SESSION_DELAY: number;
    MAX_PAGE_BLOCK: number;
}

export interface _busActivePtr {
    meter: Logika4;
    nt: number;
    tv: M4_MeterChannel;
    lastIOTime: string;
    tsFromLastIO: string;
}

export enum RecvFlags {
    DontThrowOnErrorReply = 0x01
}

export enum CompressionType {
    FLZLimitedLength = 0x10
}