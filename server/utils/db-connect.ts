import { drizzle } from 'drizzle-orm/better-sqlite3';

export const dbConnect = drizzle(process.env.NUXT_DB_FILE_NAME || '');
