import { ApiProperty } from "@nestjs/swagger";


export class MetricValue{
    @ApiProperty({ description: 'ID метрики', example: 'dfghj'})
    id: string;
    
    @ApiProperty({ description: 'Значение метрики', example: '123432'})
    metricValue: string

    @ApiProperty({ description: 'Название метрики', example: 'Разряд батареи'})
    metricCaption: string
}

export class ParameterValue{
    @ApiProperty({ description: 'ID параметра', example: 'dfghj'})
    id: string;
    
    @ApiProperty({ description: 'Значение параметра', example: '123432'})
    parameterValue: string

    @ApiProperty({ description: 'Название параметра', example: 'Изменение сигнала на дискретном входе'})
    parameterCaption: string
}

export class LoadCurrentMetricsRequest {
    @ApiProperty({ description: 'UID устройства', example: 'abcdef'})
    deviceUid: string; 

    @ApiProperty({ description: 'Список идентификаторов метрик', example: '1,3,4,5'})
    metrics?: [string]
}

export class LoadCurrentMetricsReply {
    @ApiProperty({ description: 'UID устройства', example: 'abcdef'})
    uid: string; // FIXME rename to  deviceUid
    
    @ApiProperty({ type: [MetricValue], description: 'Список значений метрик'})
    metrics: MetricValue[]
}


export class LoadArchiveMetricsRequest {
    @ApiProperty({ description: 'UID устройства', example: 'abcdef'})
    deviceUid: string; 

    @ApiProperty({ description: 'ID архивного периода', example: '1'})
    archivePeriod: string;

}

export class LoadArchiveMetricsReply {
    @ApiProperty({ description: 'UID устройства', example: 'abcdef'})
    deviceUid: string; 

    @ApiProperty({ description: 'ID архивного периода', example: '1'})
    archivePeriod: string;

    @ApiProperty({ type: [], description: 'Список значений метрик'})
    metrics: MetricValue[]
}

export class ParameterModifyRequest{
    @ApiProperty({ description: 'UID устройства', example: 'abcdef'})
    deviceUid: string; 

    @ApiProperty({ description: 'Новое значение параметра'})
    parameterValue: ParameterValue; 
}

export class ParameterModifyReply{
    @ApiProperty({ description: 'UID устройства', example: 'abcdef'})
    deviceUid: string; 

    @ApiProperty({ description: 'Текущее значение параметра'})
    parameterValue?: ParameterValue; 
}