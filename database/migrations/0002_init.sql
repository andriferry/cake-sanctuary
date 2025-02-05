PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_invoices` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`invoice` text NOT NULL,
	`paymentmethod` integer NOT NULL,
	`paymentstatus` integer NOT NULL,
	`amount` text NOT NULL,
	`collected` integer,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`paymentmethod`) REFERENCES `paymentmethod`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`paymentstatus`) REFERENCES `paymentstatus`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`collected`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_invoices`("id", "invoice", "paymentmethod", "paymentstatus", "amount", "collected", "created_at") SELECT "id", "invoice", "paymentmethod", "paymentstatus", "amount", "collected", "created_at" FROM `invoices`;--> statement-breakpoint
DROP TABLE `invoices`;--> statement-breakpoint
ALTER TABLE `__new_invoices` RENAME TO `invoices`;--> statement-breakpoint
PRAGMA foreign_keys=ON;