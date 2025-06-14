import { InferSelectModel } from "drizzle-orm";
import {
  serial,
  text,
  pgSchema,
  doublePrecision,
  customType,
} from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";

const bytea = customType<{ data: Buffer; notNull: false; default: false }>({
  dataType() {
    return "bytea";
  },
});

export const mySchema = pgSchema("poc");

export const apps = mySchema.table("app", {
  id: serial("id").primaryKey().unique(),
  title: text("title"),
  version: text("version"),
  genre: text("genre"),
  system_risk: doublePrecision("system_risk"),
  privacy_risk: doublePrecision("privacy_risk"),
  reliability_risk: doublePrecision("reliability_risk"),
  financial_risk: doublePrecision("financial_risk"),
  platform: text("platform"),
  icon: bytea("icon"),
});

export const AppSchema = createSelectSchema(apps);

export type AppType = InferSelectModel<typeof apps>;
