import { Tag } from "./tag";

export interface DataTag extends Tag {
    Index: number | null;
    Value: any;
    TimeStamp: string;
    Oper: boolean;
    ErrorDesc: string;
    DisplayFormat: string;
    Address: string;
}

export interface DataTag6Container extends Tag {
    tags: DataTag[];
    Address: string;
}