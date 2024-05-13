import { Connection } from "src/connections/connection";

export interface Protocol {
    connection: Connection;
    packetsSent: number;
    packetsRcvd: number;
    rxTimeouts: number;
    rxCRCs: number;
    rxLatePkts: number;
    genErrs: number;
    IsCancelled: boolean;
}

export enum ProtoEvent {
    packetTransmitted,
    packetReceived,
    rxTimeout,
    rxCrcError,
    genericError
}