import { Protocol } from "../protocol";

export interface SPBusProtocol extends Protocol {
    MAX_DEV_PACKET_LENGTH: number;
    GatewayMaxNetAddr: number;
    GatewayNetAddr: number;
}