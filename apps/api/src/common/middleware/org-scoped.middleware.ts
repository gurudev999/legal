import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

import { OrgContextService } from '../providers/org-context.service';

@Injectable()
export class OrgScopedMiddleware implements NestMiddleware {
  constructor(private readonly orgContextService: OrgContextService) {}

  use(req: Request, _res: Response, next: NextFunction) {
    const header = req.headers['x-org-id'];
    const orgId = Array.isArray(header) ? header[0] : header;

    this.orgContextService.runWithOrg(typeof orgId === 'string' ? orgId : undefined, () => {
      if (orgId && typeof orgId === 'string') {
        (req as any).orgId = orgId;
      }
      next();
    });
  }
}
