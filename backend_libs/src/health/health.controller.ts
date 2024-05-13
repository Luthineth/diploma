import { Controller, Get } from '@nestjs/common';
import { 
  HealthCheckService, 
  DiskHealthIndicator, 
  HealthCheck, 
  MemoryHealthIndicator, 
  HttpHealthIndicator 
} from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';

@Controller('health')
@ApiTags('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,    
    private readonly memory: MemoryHealthIndicator,
    private readonly disk: DiskHealthIndicator,
    private readonly http: HttpHealthIndicator,
  ) {}

  private const 

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([      
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
      () => this.http.pingCheck('api', 'http://localhost:3000/api/meow')
      //() => this.disk.checkStorage('storage', { path: 'D:/', thresholdPercent: 0.9 })
    ]);
  }

  @Get("/readiness")
  @HealthCheck()
  readiness() {
    return this.health.check([]);
  }
}