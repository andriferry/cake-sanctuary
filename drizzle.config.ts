import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
  // dbCredentials: {
  //   url: `file:${process.env.NUXT_DB_FILE_NAME}`,
  // },
})
