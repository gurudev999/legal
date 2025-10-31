import { z } from 'zod';

export const featureFlagSchema = z.object({
  id: z.string().uuid(),
  key: z.string().min(1),
  description: z.string().optional(),
  enabled: z.boolean(),
  payload: z.record(z.unknown()).optional(),
  orgId: z.string().uuid().optional(),
  environment: z.enum(['development', 'staging', 'production']).default('development'),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type FeatureFlag = z.infer<typeof featureFlagSchema>;
