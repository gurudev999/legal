import { Controller, Get, Headers, UnauthorizedException } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuditLogService } from './audit-log.service';

@ApiTags('audit')
@Controller('api/audit-logs')
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Get()
  @ApiOperation({ summary: 'List audit logs (org scoped)' })
  @ApiHeader({ name: 'x-org-id', required: false })
  async list(@Headers('x-org-id') orgId?: string) {
    if (!orgId) {
      throw new UnauthorizedException('x-org-id header required when auth is not configured');
    }
    return this.auditLogService.list();
  }
}
