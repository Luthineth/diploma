export enum M4Opcode {
    Error = 0x21,
    Handshake = 0x3F,
    SetSpeed = 0x42,
    WriteParam = 0x44,
    ReadFlash = 0x45,
    CalcControl = 0x4F,
    ReadRam = 0x52,
    DeviceDiscovery = 0xF0,
    SessionClose = 0x71,
    ReadArchive = 0x61,
    ReadTags = 0x72,
    WriteTags = 0x77,
    SetTechnologicalNT = 0xF1
}