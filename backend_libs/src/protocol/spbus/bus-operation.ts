export enum BusOperation {
    ReadParam = 0x1D,
    WriteParam = 0x03,
    ReadIdxParam = 0x0C,
    WriteIdxParam = 0x14,
    ReadArchive = 0x0E,
    ReadTableRow = 0x18,
    ReadTableDescriptor = 0x19,
    HangupModem = 0x82,
    ArchiveData = 0x16,
    TableRow = 0x20,
    TableDescriptor = 0x21,
    WriteResult = 0x7F
}