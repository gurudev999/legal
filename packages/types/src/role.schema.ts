import { z } from 'zod';

export const roleSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  permissions: z.array(z.string()),
  orgId: z.string().uuid().optional(),
  isSystemRole: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Role = z.infer<typeof roleSchema>;
