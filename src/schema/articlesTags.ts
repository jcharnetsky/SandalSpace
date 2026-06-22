import { sql } from "drizzle-orm";
import { int, mysqlTable, serial, timestamp } from "drizzle-orm/mysql-core";
import { articles } from "./articles";
import { tags } from "./tags";

export const articlesTags = mysqlTable("ArticlesTags", {
  articleId: int()
    .primaryKey()
    .autoincrement()
    .references(() => articles.id),
  tagId: int()
    .primaryKey()
    .references(() => tags.id),
  created: timestamp().generatedAlwaysAs(sql`(CURRENT_TIMESTAMP)`),
  update: timestamp()
    .generatedAlwaysAs(sql`(CURRENT_TIMESTAMP)`)
    .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
});
