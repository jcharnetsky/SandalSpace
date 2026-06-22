import { sql } from "drizzle-orm";
import { int, mysqlTable, text, timestamp } from "drizzle-orm/mysql-core";

export const users = mysqlTable("Users", {
  id: int().primaryKey().autoincrement(),
  username: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
  created: timestamp().generatedAlwaysAs(sql`(CURRENT_TIMESTAMP)`),
  update: timestamp()
    .generatedAlwaysAs(sql`(CURRENT_TIMESTAMP)`)
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});
