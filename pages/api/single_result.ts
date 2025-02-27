import client from "./db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    let query = `SELECT * FROM poc.app`;

    if (id) {
      query = `SELECT * FROM poc.app WHERE id = ${id}`; // Case-insensitive search with partial match
    }

    const result = await client.query(query);

    if (result?.rows) {
      res.status(200).json(result?.rows);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {}
}
