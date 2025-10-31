import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { OrgContextService } from '../../common/providers/org-context.service';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private readonly orgContext: OrgContextService) {
    super();

    this.$use(async (params, next) => {
      const orgId = this.orgContext.getOrgId();
      if (orgId) {
        params.args = params.args ?? {};

        const isRead = ['findUnique', 'findFirst', 'findMany'].includes(params.action);
        const isWrite = ['create', 'createMany', 'update', 'updateMany', 'upsert'].includes(
          params.action,
        );

        if (isRead) {
          params.args.where = params.args.where ?? {};
          if (!params.args.where.orgId) {
            params.args.where.orgId = orgId;
          }
        }

        if (isWrite) {
          if (params.args.data) {
            params.args.data.orgId = params.args.data.orgId ?? orgId;
          }
        }
      }

      return next(params);
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
