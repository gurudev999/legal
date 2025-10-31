export interface LegalCrmClientOptions {
  baseUrl: string;
  apiKey?: string;
  orgId?: string;
}

export class LegalCrmClient {
  private baseUrl: string;
  private apiKey?: string;
  private orgId?: string;

  constructor(options: LegalCrmClientOptions) {
    this.baseUrl = options.baseUrl;
    this.apiKey = options.apiKey;
    this.orgId = options.orgId;
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const headers = {
      'Content-Type': 'application/json',
      ...(this.apiKey && { Authorization: `Bearer ${this.apiKey}` }),
      ...(this.orgId && { 'X-Org-Id': this.orgId }),
      ...options?.headers,
    };

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async healthCheck(): Promise<{ status: string; timestamp: number }> {
    return this.fetch('/healthz');
  }

  async getOrgs() {
    return this.fetch('/api/orgs');
  }

  async getOrgById(orgId: string) {
    return this.fetch(`/api/orgs/${orgId}`);
  }
}
