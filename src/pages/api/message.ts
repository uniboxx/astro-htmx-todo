import type { APIContext } from 'astro';

export async function GET(ctx: APIContext) {
  return new Response('HTMX working', {
    headers: {
      'Last-Modified': '11 June 2025',
    },
  });
}
