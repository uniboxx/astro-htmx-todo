import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config
const Tasks = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    task: column.text(),
    done: column.boolean({ default: false }),
  },
});

export default defineDb({
  tables: { Tasks },
});
