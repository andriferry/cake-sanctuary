CREATE TABLE "users" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"picture" text DEFAULT '',
	"created_at" text DEFAULT (CURRENT_TIMESTAMP),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
