import { Injectable } from '@nestjs/common';

@Injectable()
export class Middleware {
  use(req, res, next) {
    console.log('Request...',req['body']);
    next();
  }
}
