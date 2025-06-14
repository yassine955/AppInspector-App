import { apps } from '@/src/drizzle/schema/apps';
import { eq } from 'drizzle-orm';
import { db } from '../drizzle/db';

export async function getAppByTitle(title: string) {
  const result = await db.select().from(apps).where(eq(apps.title, title)).limit(1);

  return result[0]; // or return null if nothing found
}
