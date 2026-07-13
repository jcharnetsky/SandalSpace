import { sql } from "drizzle-orm";
import { int, mysqlTable, text, timestamp } from "drizzle-orm/mysql-core";
import { articles } from "./articles";

export const images = mysqlTable("Images", {
  id: int().primaryKey().autoincrement(),
  articleId: int().references(() => articles.id),
  url: text().notNull(),
  alt_text: text().notNull(),
  width: int(),
  height: int(),
  created: timestamp().generatedAlwaysAs(sql`(CURRENT_TIMESTAMP)`),
  updated: timestamp()
    .defaultNow()
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});
