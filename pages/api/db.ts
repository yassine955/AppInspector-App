import { Pool } from "pg";

const client = new Pool({
  user: "neondb_owner",
  host: process.env.NEXT_PUBLIC_HOST,
  database: process.env.NEXT_PUBLIC_DB,
  password: process.env.NEXT_PUBLIC_PASS,
  port: 5432, // default PostgreSQL port
  ssl: true,
});

client.connect();

export default client;
