import { 
    LoadCurrentMetricsRequest, 
    LoadCurrentMetricsReply,
    LoadArchiveMetricsRequest,
    LoadArchiveMetricsReply,
    ParameterModifyRequest,
    ParameterModifyReply
} from './operations';


export interface OperationsService{
    loadCurrentMetrics(request: LoadCurrentMetricsRequest):Promise<LoadCurrentMetricsReply>;     

    loadArchiveMetrics(request: LoadArchiveMetricsRequest):Promise<LoadArchiveMetricsReply>;

    modifyParameter(request: ParameterModifyRequest): Promise<ParameterModifyReply>;
}
