import { db, Tasks } from 'astro:db';
import { nanoid } from 'nanoid';

// https://astro.build/db/seed

export default async function seed() {
  await db.insert(Tasks).values([
    {
      id: nanoid(),
      task: 'Plan Video',
      done: false,
    },
    {
      id: nanoid(),
      task: 'Record Video',
      done: false,
    },
    {
      id: nanoid(),
      task: 'Edit Video',
      done: false,
    },
  ]);
}
