// robots.txt generado con la URL de `site` (astro.config.mjs)
import type { APIRoute } from 'astro';
import { withBase } from '../utils/url';

export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL(withBase('/sitemap-index.xml'), site).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
