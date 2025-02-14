CREATE TABLE "usersData" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstname" varchar(255) NOT NULL,
	"lastname" varchar(255) NOT NULL,
	"phonenumber" varchar(15) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"gender" varchar(255) NOT NULL,
	CONSTRAINT "usersData_phonenumber_unique" UNIQUE("phonenumber"),
	CONSTRAINT "usersData_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DROP TABLE "users" CASCADE;