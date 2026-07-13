import { sql } from "drizzle-orm";
import { users } from "./users";
import {
  boolean,
  int,
  text,
  timestamp,
  mysqlTable,
  json,
  varchar,
} from "drizzle-orm/mysql-core";

// Database table
export const articles = mysqlTable("Articles", {
  id: int().primaryKey().autoincrement(),
  authorId: int()
    .notNull()
    .references(() => users.id),
  title: text().notNull(),
  body: json().notNull(),
  exerpt: text().notNull(),
  published: boolean(),
  created: timestamp().generatedAlwaysAs(sql`(CURRENT_TIMESTAMP)`),
  updated: timestamp()
    .defaultNow()
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});
