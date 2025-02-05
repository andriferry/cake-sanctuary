CREATE TABLE `invoices` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`invoice` text NOT NULL,
	`paymentmethod` integer,
	`paymentstatus` integer,
	`amount` text NOT NULL,
	`collected` integer,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`paymentmethod`) REFERENCES `paymentmethod`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`paymentstatus`) REFERENCES `paymentstatus`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`collected`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `paymentmethod` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`paymentmethod` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE TABLE `paymentstatus` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`paymentstatus` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP)
);
