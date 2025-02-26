import { Pool } from "pg";

const client = new Pool({
  user: "postgres",
  host: "localhost",
  database: "AppInspectorDemo",
  password: "1234",
  port: 5432, // default PostgreSQL port
});

client.connect();

export default client;
