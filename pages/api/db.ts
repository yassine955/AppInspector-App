import { Pool } from "pg";

const client = new Pool({
  user: "postgres",
  host: process.env.NEXT_PUBLIC_HOST,
  database: process.env.NEXT_PUBLIC_DB,
  password: process.env.NEXT_PUBLIC_PASS,
  port: 5432, // default PostgreSQL port
  ssl: false,
});

client.connect();

export default client;
