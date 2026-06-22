import { sql } from "drizzle-orm";
import { users } from "./users";
import {
  boolean,
  int,
  text,
  timestamp,
  mysqlTable,
  serial,
} from "drizzle-orm/mysql-core";

// Database table
export const articles = mysqlTable("Articles", {
  id: int().primaryKey().autoincrement(),
  authorId: int()
    .notNull()
    .references(() => users.id),
  title: text().notNull(),
  body: text().notNull(),
  published: boolean(),
  created: timestamp().generatedAlwaysAs(sql`(CURRENT_TIMESTAMP)`),
  update: timestamp()
    .generatedAlwaysAs(sql`(CURRENT_TIMESTAMP)`)
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});
