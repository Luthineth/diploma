import { MeterInstance } from "./m4-protocol_-api";

export interface FlashArray {
    elementCount: number;
    elementSize: number;
    mtrInstance: MeterInstance;
}

export interface FlashRingBuffer extends FlashArray {
    IndexAddress: number;
}

export interface ObjCollection<T> {

}

export interface FRBIndex {
    idx: number;
    time: string;
}