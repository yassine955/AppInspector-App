// pages/api/icon/[id].ts
import { db } from '@/src/drizzle/db';
import { apps } from '@/src/drizzle/schema/apps';
import { eq } from 'drizzle-orm';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);
  if (isNaN(id)) return res.status(400).send('Invalid ID');

  const result = await db
    .select({ icon: apps.icon })
    .from(apps)
    .where(eq(apps.id, id))
    .then((rows) => rows[0]);

  if (!result?.icon) return res.status(404).send('Icon not found');

  res.setHeader('Content-Type', 'image/png');
  res.send(Buffer.from(result.icon));
}
