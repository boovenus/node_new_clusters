import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { TRANSCODE_QUEUE } from './constants';
import { bench } from './bench';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue(TRANSCODE_QUEUE) private readonly transcodeQueue: Queue,
  ) {}

  getHello(): any {
    return bench(500);
  }

  async transcode() {
    await this.transcodeQueue.add({
      fileName: './file.mp3',
    });
  }
}
