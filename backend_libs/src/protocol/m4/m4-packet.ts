export interface M4Packet {
    NT: number;
    Extended: boolean;
    ID: number;
    Attributes: number;
    FunctionCode: M4Opcode;
    Data: string;
    Check: number;
}