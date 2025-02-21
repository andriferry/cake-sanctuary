import { defineConfig } from 'drizzle-kit'

const runtimeConfig = useRuntimeConfig()

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  dbCredentials: {
    url: `file:${runtimeConfig.databasePath}`,
  },
})
