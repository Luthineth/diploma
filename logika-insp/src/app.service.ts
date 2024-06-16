import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {  
  getMeow(): string{
    return "Meow!!!";
  }
}
