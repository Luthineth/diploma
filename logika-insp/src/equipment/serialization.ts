export interface SerializerBase {

}

export enum SType {
    Null,
    Boolean,
    Byte,
    Int16,
    Int32,
    String
}

export interface Serializer extends SerializerBase {

}

export interface Deserializer extends SerializerBase {
    EOF: boolean;
}