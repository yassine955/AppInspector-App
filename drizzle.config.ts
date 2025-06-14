import "dotenv";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/drizzle/schema",
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    user: "postgres",
    host: process.env.HOST!,
    database: process.env.DB!,
    password: process.env.PAS!,
    port: 5432, // default PostgreSQL port
    ssl: false,
  },
  verbose: true,
  strict: true,
});
