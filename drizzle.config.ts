import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  schema: './database/schema.ts',
  out: './database/migrations',
  dbCredentials: {
    url: `file:${process.env.NUXT_DB_FILE_NAME}`,
  },
})
