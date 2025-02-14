ALTER TABLE "usersData" DROP CONSTRAINT "usersData_phonenumber_unique";--> statement-breakpoint
ALTER TABLE "usersData" ADD COLUMN "firs_tname" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "usersData" ADD COLUMN "last_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "usersData" ADD COLUMN "phone_number" varchar(15) NOT NULL;--> statement-breakpoint
ALTER TABLE "usersData" DROP COLUMN "firstname";--> statement-breakpoint
ALTER TABLE "usersData" DROP COLUMN "lastname";--> statement-breakpoint
ALTER TABLE "usersData" DROP COLUMN "phonenumber";--> statement-breakpoint
ALTER TABLE "usersData" ADD CONSTRAINT "usersData_phone_number_unique" UNIQUE("phone_number");