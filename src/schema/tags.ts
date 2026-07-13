import { sql } from "drizzle-orm";
import {
  int,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const tags = mysqlTable("Tags", {
  id: int().primaryKey().autoincrement(),
  value: varchar({ length: 64 }).notNull().unique(),
  created: timestamp().generatedAlwaysAs(sql`(CURRENT_TIMESTAMP)`),
  updated: timestamp()
    .defaultNow()
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});
