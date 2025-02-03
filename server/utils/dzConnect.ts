import { drizzle } from 'drizzle-orm/better-sqlite3';

export const drizzleConnection = drizzle(process.env.NUXT_DB_FILE_NAME);
