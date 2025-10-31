import { v4 as uuid } from 'uuid';
import type { Request, Response, NextFunction } from 'express';

export class CorrelationIdMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const headerName = 'x-correlation-id';
    const correlationId = req.headers[headerName] ?? uuid();

    req.headers[headerName] = String(correlationId);
    res.setHeader(headerName, String(correlationId));

    next();
  }
}
