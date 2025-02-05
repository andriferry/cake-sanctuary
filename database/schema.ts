import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql, relations } from 'drizzle-orm';

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    picture: text('picture').default(''),
    created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
});

export const paymentStatus = sqliteTable('paymentstatus', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    payment: text('paymentstatus').notNull(),
    created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
});

export const paymentMethod = sqliteTable('paymentmethod', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    paymentMethod: text('paymentmethod').notNull(),
    created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
});

export const invoices = sqliteTable('invoices', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    invoice: text('invoice').notNull(),
    paymentMethod: integer('paymentmethod').references(() => paymentMethod.id).notNull(),
    paymentStatus: integer('paymentstatus').references(() => paymentStatus.id).notNull(),
    totalAmount: integer('amount').notNull(),
    collected: integer('collected').references(() => users.id),
    created_at: text().default(sql`(CURRENT_TIMESTAMP)`),
});

export const postsRelations = relations(invoices, ({ one }) => ({
    paymentMethod: one(paymentMethod),
    paymentStatus: one(paymentStatus),
}));
