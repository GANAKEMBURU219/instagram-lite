import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("usersData", {
  id: serial("id").primaryKey(),
  firstname: varchar("first_name",{ length: 255 }).notNull(),
  lastname: varchar("last_name",{ length: 255 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 15 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password",{ length: 255 }).notNull(),
  gender:varchar("gender",{ length: 255 }).notNull(),
});