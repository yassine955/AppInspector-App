import client from "./db";
import { NextApiRequest, NextApiResponse } from "next";

interface VulnerableApp {
  vulnerable: boolean;
  id: string;
  hash: string;
  name: string;
  package_name: string;
  platform: string;
  publisher: string | null;
  social_media_scan: string | null;
  version: string;
  permissions_friendly_names: string | null;
  risk: number;
  num_tests: number | null;
  last_update: string | null;
  total_score: number | null;
  system_risk: number | null;
  privacy_risk: number | null;
  reliability_risk: number | null;
  risk_description: string | null;
  financial_risk: number | null;
  icon: string | null;
  git_repo_hash: string | null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { naam } = req.query;

    const table = "poc.app";

    // let query = `SELECT * FROM poc.app`;
    let query = `SELECT * FROM ${table}`;

    if (naam) {
      // query = `SELECT * FROM poc.app WHERE name ILIKE '%${naam}%'`; // Case-insensitive search with partial match
      query = `SELECT * FROM ${table} WHERE name ILIKE '%${naam}%'`; // Case-insensitive search with partial match
    }

    const result = await client.query(query);

    if (result?.rows) {
      res.status(200).json(result?.rows);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {}
}
