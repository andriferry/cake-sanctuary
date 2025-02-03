import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from '@/database/schema';
export const dbConnect = drizzle({ connection: process.env.NUXT_DB_FILE_NAME!, schema });
