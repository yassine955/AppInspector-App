import client from "./db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { naam } = req.query;

    let query = "SELECT * FROM results";

    if (naam) {
      query = `SELECT * FROM results WHERE naam ILIKE '%${naam}%'`; // Case-insensitive search with partial match
    }

    const result = await client.query(query);

    if (result?.rows) {
      res.status(200).json(result?.rows);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {}
}
