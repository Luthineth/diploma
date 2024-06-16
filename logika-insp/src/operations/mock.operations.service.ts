import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { OperParamFlag } from 'src/equipment/4m/logika4-m';

import { LoadCurrentMetricsRequest, LoadCurrentMetricsReply, LoadArchiveMetricsRequest, LoadArchiveMetricsReply, ParameterModifyRequest, ParameterModifyReply } from "./operations";
import { OperationsService } from "./operations.service";
import { MetricValue } from './operations';

@Injectable()
export class MockOperationsService implements OperationsService{
    private readonly logger = new Logger(MockOperationsService.name);

    async loadCurrentMetrics(request: LoadCurrentMetricsRequest): Promise<LoadCurrentMetricsReply> {
        const reply = new LoadCurrentMetricsReply();
        reply.uid = request.deviceUid;
        reply.metrics = this.makeResultArray(this.paramIndexes(request.metrics));

        return new Promise<LoadCurrentMetricsReply>((resolve) => {
            resolve(reply);
        });
    }


    async loadArchiveMetrics(request: LoadArchiveMetricsRequest): Promise<LoadArchiveMetricsReply> {
        const reply = new LoadArchiveMetricsReply();
        reply.deviceUid = request.deviceUid;
        reply.archivePeriod = request.archivePeriod;
        reply.metrics = this.makeResultArray(null);

        return new Promise<LoadArchiveMetricsReply>((resolve) => {
            resolve(reply);
        });
    }


    async modifyParameter(request: ParameterModifyRequest): Promise<ParameterModifyReply> {
        this.logger.log(`Modify request arrived : ${request}`);
        const reply = new ParameterModifyReply();
        reply.deviceUid =  request.deviceUid;
        reply.parameterValue = request.parameterValue;

        return new Promise<ParameterModifyReply>((resolve) => {
            resolve(reply);
        });
    }    

    private makeResultArray(indexes:number[]): MetricValue[]{
        const result = new Array<MetricValue>();
        for (let i = 0; i < this.METRICS_MOCK_CAPTIONS.length; i++) {
            let v = new MetricValue();
            v.id = String(i);
            v.metricCaption = this.METRICS_MOCK_CAPTIONS[i];
            v.metricValue = String(this.METRICS_MOCK_VALUES[i]);
            result.push(v);
        }
        this.logger.log(`Indexes =${indexes}`);
        if(indexes){
            const indexSet = new Set(indexes);            
            return result.filter((v) => indexSet.has(Number(v.id)));
        }        
        return result;
    }


    private paramIndexes(indexes?:[string]): number[] {
        if(indexes!=null && indexes.length>0){         
            const result = new Array<number>();            

            for(var item of indexes){
                let v = item.trim();
                if(v){                
                    result.push(Number(v));
                }
            }            
            return result.length > 0 ?  result : null;
        }
        else{
            return null;        
        }        
    }

    private ND_STR = "#н/д";

    private METRICS_MOCK_CAPTIONS = [
        "Разряд батареи",        
        "Перегрузка по цепям питания преобразователей расхода",
        "Изменение сигнала на дискретном входе",
        "Параметр tхв вне диапазона 0..176°C",
        "Выход контролируемого параметра за границы диапазона УН..УВ",
        "Выход контролируемого параметра за границы диапазона УН2..УВ2",
        "",
        "Отсутствует внешнее питание",    

        "Параметр P1 по вводу вне диапазона 0..1,1*ВП1",    
        "Параметр P2 по вводу вне диапазона 0..1,1*ВП2",
        "Параметр t1 по вводу вне диапазона 0..176°C",
        "Параметр t2 по вводу вне диапазона 0..176°C",
        "Параметр t3 по вводу вне диапазона 0..176°C",   
        "Расход через ВС1 выше верхнего предела измерений",
        "Ненулевой расход через ВС1 ниже нижнего предела измерений",
        "Расход через ВС2 выше верхнего предела измерений",
        "Ненулевой расход через ВС2 ниже нижнего предела измерений",
        "Расход через ВС3 выше верхнего предела измерений",
        "Ненулевой расход через ВС3 ниже нижнего предела измерений",  

        "Отрицательное значение разности часовых масс теплоносителя(М1ч–М2ч), выходит за допустимые пределы",
        "Отрицательное значение часового количества тепловой энергии (Qч<0)",
        "Значение разности часовых масс (М1ч–М2ч) меньше нуля",
        "Значение разности часовых масс (М1ч–М2ч) в пределах допустимого расхождения",
        "Значение разности температур (dt) ниже минимального нормированного значения",  //23
    ]

    private METRICS_MOCK_VALUES = [
        OperParamFlag.No,
        OperParamFlag.No,
        OperParamFlag.Yes,
        OperParamFlag.No,
        OperParamFlag.No,
        OperParamFlag.No,
        OperParamFlag.No,
        OperParamFlag.No,

        OperParamFlag.No,
        OperParamFlag.No,
        OperParamFlag.No,
        OperParamFlag.No,
        OperParamFlag.No,
        OperParamFlag.Yes,
        OperParamFlag.Yes,
        OperParamFlag.No,
        OperParamFlag.No,
        OperParamFlag.No,
        OperParamFlag.No,

        OperParamFlag.No,
        OperParamFlag.No,
        OperParamFlag.No,
        OperParamFlag.Yes,
        OperParamFlag.No,
    ]

    
}