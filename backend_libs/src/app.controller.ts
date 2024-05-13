import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiExcludeEndpoint } from '@nestjs/swagger';


@Controller("/api")
@ApiTags('inspector')
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}
  
  @Get("/meow")
  @ApiExcludeEndpoint()
  getMeow(): string {
    return this.appService.getMeow();
  }
}
