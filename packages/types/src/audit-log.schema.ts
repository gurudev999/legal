import { z } from 'zod';

export const auditLogSchema = z.object({
  id: z.string().uuid(),
  action: z.string().min(1),
  resource: z.string().min(1),
  resourceId: z.string().optional(),
  userId: z.string().uuid(),
  orgId: z.string().uuid(),
  metadata: z.record(z.unknown()).optional(),
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
  timestamp: z.date(),
});

export type AuditLog = z.infer<typeof auditLogSchema>;
