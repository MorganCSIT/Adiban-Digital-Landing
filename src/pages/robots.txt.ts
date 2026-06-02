import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = () => {
  return new Response(`User-agent: *
Allow: /

Sitemap: ${siteConfig.url}/sitemap.xml
`, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
