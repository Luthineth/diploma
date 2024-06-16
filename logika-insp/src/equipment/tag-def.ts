import { ItemDefBase } from "./item-def-base";
import { StdVar } from "./standard-vars";
import { TagKind } from "./types";

export interface TagDef extends ItemDefBase {
    StdVar: StdVar;
    DbType: string;
    DisplayFormat: string;
    Key: string;
}

export interface DataTagDef extends TagDef {
    Kind: TagKind;
    DescriptionEx: string;
    Range: string;
    isBasicParam: boolean;
    UpdateRate: number;
}

export enum Tag6NodeType {
    Tag = 0,
    Array = 1,
    Structure = 2
}

export interface DataTagDef6 extends DataTagDef {
    Key: string;
    NodeType: Tag6NodeType;
    Count: number | null;
    Index: number | null;
    Address: string;
}

export interface TagDef4 extends DataTagDef {
    Key: string;
    Units: string;
}

export interface TagDef4L extends TagDef4 {
    internalType: BinaryType;
    inRAM: boolean;
    address: number | null;
    channelOffset: number | null;
    addonAddress: number | null;
    addonChannelOffset: number | null;
}

export interface TagDef4M extends TagDef4 {

}