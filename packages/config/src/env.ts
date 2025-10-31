import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url().optional(),
  API_PORT: z.coerce.number().default(3001),
  WEB_URL: z.string().url(),
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
  SENTRY_DSN: z.string().optional(),
  OTEL_EXPORTER_OTLP_ENDPOINT: z.string().optional(),
  FEATURE_FLAG_PROVIDER: z.enum(['local', 'unleash', 'configcat']).default('local'),
  UNLEASH_URL: z.string().optional(),
  UNLEASH_API_KEY: z.string().optional(),
  CONFIGCAT_SDK_KEY: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  TWILIO_ACCOUNT_SID: z.string().optional(),
  TWILIO_AUTH_TOKEN: z.string().optional(),
  TWILIO_DLT_ENTITY_ID: z.string().optional(),
  FCM_SERVER_KEY: z.string().optional(),
  NOTION_API_KEY: z.string().optional(),
  CONFLUENCE_API_TOKEN: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(env: NodeJS.ProcessEnv = process.env): Env {
  const result = envSchema.safeParse(env);
  
  if (!result.success) {
    console.error('❌ Invalid environment variables:');
    console.error(result.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  }
  
  return result.data;
}
