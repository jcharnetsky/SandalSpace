import { sql } from "drizzle-orm";
import {
  int,
  mysqlTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/mysql-core";

export const tags = mysqlTable("Tags", {
  id: int().primaryKey().autoincrement(),
  value: text().notNull().unique(),
  created: timestamp().generatedAlwaysAs(sql`(CURRENT_TIMESTAMP)`),
  update: timestamp()
    .generatedAlwaysAs(sql`(CURRENT_TIMESTAMP)`)
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});
