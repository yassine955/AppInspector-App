import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/src/drizzle/schema";

export const client = new Pool({
  user: "postgres",
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASS,
  port: 5432, // default PostgreSQL port
  ssl: false,
});

export const db = drizzle(client, { schema });
