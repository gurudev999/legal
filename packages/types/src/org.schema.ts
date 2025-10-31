import { z } from 'zod';

export const orgSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  slug: z.string().min(3),
  timezone: z.string().default('Asia/Kolkata'),
  locale: z.string().default('en-IN'),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Org = z.infer<typeof orgSchema>;
