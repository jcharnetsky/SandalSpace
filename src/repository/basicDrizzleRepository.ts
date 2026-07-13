import { db } from "@/db";
import type { tables } from "@/schema/tables";
import { eq } from "drizzle-orm";

/**
 * Article Repository type to be implemented by datastores
 */
export class BasicDrizzleRepository {
  table: tables;

  constructor(table: tables) {
    this.table = table;
  }

  getAll = async () => db.select().from(this.table);

  create = async (user: typeof this.table.$inferInsert) =>
    db.insert(this.table).values(user);

  getById = async (id: number) =>
    db.select().from(this.table).where(eq(this.table.id, id));

  deleteById = async (id: number) =>
    db.delete(this.table).where(eq(this.table.id, id));

  updateById = async (id: number, value: typeof this.table.$inferInsert) =>
    db.update(this.table).set(value).where(eq(this.table.id, id));
}
