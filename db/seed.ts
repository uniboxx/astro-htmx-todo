import { db, Tasks } from 'astro:db';

// https://astro.build/db/seed

export default async function seed() {
  await db.insert(Tasks).values([
    {
      id: 1,
      task: 'Plan Video',
      done: false,
    },
    {
      id: 2,
      task: 'Record Video',
      done: false,
    },
    {
      id: 3,
      task: 'Edit Video',
      done: false,
    },
  ]);
}
