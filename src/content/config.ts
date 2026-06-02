import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    readTime: z.string(),
    author: z.string().default('Adiban Digital'),
    ogImage: z.string().optional(),
  }),
});

export const collections = { blog };
