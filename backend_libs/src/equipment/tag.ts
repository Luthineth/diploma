import { TagDef } from "./tag-def";
import { Channel } from "./channel";

export interface Tag {
    def: TagDef;
    Channel: Channel;
    Name: string;
    FieldName: string;
    Ordinal: number;
    Description: string;
    Address: string;
    EU: string;
}