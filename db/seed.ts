import { db, Tasks } from 'astro:db';
import { nanoid } from 'nanoid';

// https://astro.build/db/seed

export default async function seed() {
  await db.insert(Tasks).values([
    {
      id: nanoid(),
      text: 'Plan Video',
    },
    {
      id: nanoid(),
      text: 'Record Video',
    },
    {
      id: nanoid(),
      text: 'Edit Video',
    },
  ] as unknown as Task[]);
}
