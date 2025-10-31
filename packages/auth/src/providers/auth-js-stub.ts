import type { AuthProvider, SessionUser } from './auth-provider.interface';

export class AuthJsProvider implements AuthProvider {
  async getCurrentUser(): Promise<SessionUser | null> {
    throw new Error('Auth.js integration not yet configured. Configure AUTH_SECRET to enable.');
  }

  async getOrganizations(): Promise<Array<{ id: string; name: string }>> {
    throw new Error('Auth.js integration not yet configured.');
  }

  async switchOrganization(): Promise<void> {
    throw new Error('Auth.js integration not yet configured.');
  }
}
