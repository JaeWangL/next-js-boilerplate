import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  NEXT_PUBLIC_WEB_URL: z.string().url(),
  NEXT_PUBLIC_BFF_URL: z.string().url(),

  NEXTAUTH_SECRET: z.string(),
  AZURE_AD_B2C_TENANT_NAME: z.string(),
  AZURE_AD_B2C_CLIENT_ID: z.string(),
  AZURE_AD_B2C_CLIENT_SECRET: z.string(),
  AZURE_AD_B2C_PRIMARY_USER_FLOW: z.string(),
});

const envParsed = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
  NEXT_PUBLIC_BFF_URL: process.env.NEXT_PUBLIC_BFF_URL,

  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  AZURE_AD_B2C_TENANT_NAME: process.env.AZURE_AD_B2C_TENANT_NAME,
  AZURE_AD_B2C_CLIENT_ID: process.env.AZURE_AD_B2C_CLIENT_ID,
  AZURE_AD_B2C_CLIENT_SECRET: process.env.AZURE_AD_B2C_CLIENT_SECRET,
  AZURE_AD_B2C_PRIMARY_USER_FLOW: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
});

if (!envParsed.success) {
  console.error(envParsed.error.issues);
  throw new Error('There is an error with the environment variables');
}

export const envServerSchema = envParsed.data;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
