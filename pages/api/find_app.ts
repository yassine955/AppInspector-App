import { db } from "@/src/drizzle/db";
import { NextApiRequest, NextApiResponse } from "next";
import { apps } from "@/src/drizzle/schema";
import { ilike } from "drizzle-orm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { title } = req.query;

    const check_if_exists = await db
      .select()
      .from(apps)
      .where(ilike(apps.title, `%${String(title).trim()}%`))
      .limit(1);

    if (check_if_exists.length == 1) {
      res.status(200).json(true);
    } else {
      res.status(200).json(false);
    }
  } catch (error) {}
}
