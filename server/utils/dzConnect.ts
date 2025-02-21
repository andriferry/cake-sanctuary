import { drizzle } from 'drizzle-orm/better-sqlite3'
import * as schema from '~/server/database/schema'

const runtimeConfig = useRuntimeConfig()

export const dbConnect = drizzle({ connection: runtimeConfig.databasePath!, schema })
