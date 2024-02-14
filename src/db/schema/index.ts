import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const wilayah = pgTable("wilayah", {
	id: integer("id").primaryKey(),
	kode: text("kode").notNull(),
	nama: text("nama").notNull(),
	tingkat: integer("tingkat").notNull(),
	is_fecthed: boolean("is_fetched").default(false),
});
