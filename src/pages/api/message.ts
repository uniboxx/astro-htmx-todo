import type { APIContext } from 'astro';

export async function GET(ctx: APIContext) {
  return new Response(
    `
    <p id="message">This message come from api called with htmx</p>
    `,
    {
      headers: {
        'Last-Modified': '11 June 2025',
      },
    }
  );
}
