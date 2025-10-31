import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { pino } from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
});

@Injectable()
export class HttpLoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      logger.info({
        method: req.method,
        url: req.originalUrl,
        statusCode: res.statusCode,
        duration,
        correlationId: req.headers['x-correlation-id'],
        orgId: (req as any).orgId,
      });
    });

    next();
  }
}
