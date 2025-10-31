export interface SessionUser {
  id: string;
  email: string;
  name?: string;
  orgId?: string;
  avatarUrl?: string;
}

export interface AuthProvider {
  getCurrentUser(): Promise<SessionUser | null>;
  getOrganizations(userId: string): Promise<Array<{ id: string; name: string }>>;
  switchOrganization(userId: string, orgId: string): Promise<void>;
}

export class AuthNotImplementedProvider implements AuthProvider {
  async getCurrentUser(): Promise<SessionUser | null> {
    return null;
  }

  async getOrganizations(): Promise<Array<{ id: string; name: string }>> {
    return [];
  }

  async switchOrganization(): Promise<void> {
    throw new Error('Auth provider not configured.');
  }
}
