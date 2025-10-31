import type { AuthProvider, SessionUser } from './auth-provider.interface';

export class ClerkAuthProvider implements AuthProvider {
  async getCurrentUser(): Promise<SessionUser | null> {
    throw new Error('Clerk integration not yet configured. Add CLERK_SECRET_KEY to use Clerk.');
  }

  async getOrganizations(): Promise<Array<{ id: string; name: string }>> {
    throw new Error('Clerk integration not yet configured.');
  }

  async switchOrganization(): Promise<void> {
    throw new Error('Clerk integration not yet configured.');
  }
}
