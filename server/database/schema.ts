import { sql } from 'drizzle-orm'
import {
  integer,
  sqliteTable,
  text,
} from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  picture: text('picture').default(''),
  created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
})
