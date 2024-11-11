import { z } from 'zod';

export const envSchema = z.object({
  GA_TRACKING_ID: z.string().min(1, 'GA_TRACKING_ID is required'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format());
  process.exit(1);
}

export const env = _env.data;
