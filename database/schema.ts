import { sqliteTable, text, integer, } from 'drizzle-orm/sqlite-core';
import { sql } from "drizzle-orm";

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    avatar: text('avatar').notNull(),
    created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
});
