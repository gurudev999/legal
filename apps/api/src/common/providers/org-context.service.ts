import { AsyncLocalStorage } from 'async_hooks';
import { Injectable } from '@nestjs/common';

export interface OrgContext {
  orgId?: string;
}

@Injectable()
export class OrgContextService {
  private readonly storage = new AsyncLocalStorage<OrgContext>();

  runWithOrg(orgId: string | undefined, callback: () => void) {
    this.storage.run({ orgId }, callback);
  }

  getOrgId(): string | undefined {
    return this.storage.getStore()?.orgId;
  }
}
