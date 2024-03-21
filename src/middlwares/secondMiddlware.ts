import { Injectable } from '@nestjs/common';

@Injectable()
export class SecondMiddleware {
  use(req, res, next) {
    console.log('Request...',req['body']);
    next();
  }
}
