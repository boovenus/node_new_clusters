import { Injectable } from '@nestjs/common';
import * as fibonacci from 'fibonacci';
import { bench } from './bench';

@Injectable()
export class AppService {
  getHello(): any {
    return bench(500);
  }
}
