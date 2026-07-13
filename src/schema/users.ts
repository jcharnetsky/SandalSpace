import { sql } from "drizzle-orm";
import {
  int,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("Users", {
  id: int().primaryKey().autoincrement(),
  username: text().notNull(),
  email: varchar({ length: 320 }).notNull().unique(),
  password: text().notNull(),
  created: timestamp().generatedAlwaysAs(sql`(CURRENT_TIMESTAMP)`),
  updated: timestamp()
    .defaultNow()
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});
