CREATE TABLE "better-t3-app-drizzle_account" (
	"id" text PRIMARY KEY NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp,
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"password" text,
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "better-t3-app-drizzle_session" (
	"id" text PRIMARY KEY NOT NULL,
	"expires_at" timestamp NOT NULL,
	"token" text NOT NULL,
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	CONSTRAINT "better-t3-app-drizzle_session_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "better-t3-app-drizzle_user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified" boolean NOT NULL,
	"image" text,
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone,
	CONSTRAINT "better-t3-app-drizzle_user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "better-t3-app-drizzle_verification" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "better-t3-app-drizzle_account" ADD CONSTRAINT "better-t3-app-drizzle_account_user_id_better-t3-app-drizzle_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."better-t3-app-drizzle_user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "better-t3-app-drizzle_session" ADD CONSTRAINT "better-t3-app-drizzle_session_user_id_better-t3-app-drizzle_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."better-t3-app-drizzle_user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "account_user_id_idx" ON "better-t3-app-drizzle_account" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "session_user_id_idx" ON "better-t3-app-drizzle_session" USING btree ("user_id");