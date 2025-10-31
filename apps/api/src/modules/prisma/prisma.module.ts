import { Global, Module } from '@nestjs/common';

import { OrgContextService } from '../../common/providers/org-context.service';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [OrgContextService, PrismaService],
  exports: [OrgContextService, PrismaService],
})
export class PrismaModule {}
