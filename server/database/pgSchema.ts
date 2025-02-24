import { sql } from 'drizzle-orm'
import { pgTable, smallserial, text } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: smallserial(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  picture: text('picture').default(''),
  created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
})
