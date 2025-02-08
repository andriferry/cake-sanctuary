import * as schema from '@/database/schema'
import { drizzle } from 'drizzle-orm/better-sqlite3'

export const dbConnect = drizzle({ connection: process.env.NUXT_DB_FILE_NAME!, schema })
