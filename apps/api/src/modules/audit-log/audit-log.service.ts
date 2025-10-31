import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuditLogService {
  constructor(private readonly prisma: PrismaService) {}

  async list() {
    return this.prisma.auditLog.findMany({
      orderBy: { timestamp: 'desc' },
      take: 100,
    });
  }

  async log(data: {
    action: string;
    resource: string;
    resourceId?: string;
    userId: string;
    orgId: string;
    metadata?: Record<string, any>;
    ipAddress?: string;
    userAgent?: string;
  }) {
    return this.prisma.auditLog.create({
      data: {
        ...data,
        timestamp: new Date(),
      },
    });
  }
}
