import { Pool } from "pg";

const client = new Pool({
  user: process.env.NODE_ENV === "development" ? "postgres" : "neondb_owner",
  host:
    process.env.NODE_ENV === "development"
      ? "localhost"
      : process.env.NEXT_PUBLIC_HOST,
  database:
    process.env.NODE_ENV === "development"
      ? "AppInspectorDemo"
      : process.env.NEXT_PUBLIC_DB,
  password:
    process.env.NODE_ENV === "development"
      ? "1234"
      : process.env.NEXT_PUBLIC_PASS,
  port: 5432, // default PostgreSQL port
  ssl: process.env.NODE_ENV === "development" ? false : true,
});

client.connect();

export default client;
