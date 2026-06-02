import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://adiban.digital',
  integrations: [
    tailwind(),
    mdx(),
  ],
});
