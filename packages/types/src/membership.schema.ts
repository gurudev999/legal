import { z } from 'zod';

export const membershipSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  orgId: z.string().uuid(),
  roleId: z.string().uuid(),
  status: z.enum(['active', 'invited', 'suspended']).default('active'),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Membership = z.infer<typeof membershipSchema>;
