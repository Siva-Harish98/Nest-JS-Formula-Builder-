import { Injectable } from '@nestjs/common';

@Injectable()
export class Middlewares {
  use(req, res, next) {
    console.log('Request...',req['body']);
    next();
  }
}
