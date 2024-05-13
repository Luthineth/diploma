export interface M4Protocol {
    CHANNEL_NBASE: number;
}

export interface MeterInstance {
    proto: M4Protocol;
    mtr: Logika4;
    nt: number;
    Model: string;
    sp: number | null;
    CurrentDeviceTime: string;
}

export enum updTagsFlags {
    None,
    DontGetEUs
}

export interface Logika4MArchiveRequestState {

}