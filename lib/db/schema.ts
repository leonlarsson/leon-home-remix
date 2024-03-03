import { sql } from "drizzle-orm";
import { int, datetime, varchar, mysqlTable } from "drizzle-orm/mysql-core";

export const guestbookEntries = mysqlTable("guestbook_entries", {
  id: int("id").autoincrement().primaryKey(),
  date: datetime("date")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  body: varchar("body", { length: 100 }).notNull(),
  name: varchar("name", { length: 50 }),
  email: varchar("email", { length: 150 }),
  edited_at: datetime("edited_at"),
  deleted_at: datetime("deleted_at"),
});

export const guestbookEdits = mysqlTable("guestbook_edits", {
  id: int("id").autoincrement().primaryKey(),
  entry_id: int("entry_id").notNull(),
  date: datetime("date").default(sql`CURRENT_TIMESTAMP`),
  old_message: varchar("old_message", { length: 100 }).notNull(),
  new_message: varchar("new_message", { length: 100 }).notNull(),
  edited_by: varchar("edited_by", { length: 150 }),
});
