# Adiban Digital — Marketing Website

Production-ready marketing site built with **Astro 4**, **Tailwind CSS v3**, and **TypeScript**.

## Getting started

```bash
npm install
npm run dev       # dev server at localhost:4321
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Publishing a blog post

1. Create a new `.md` file in `src/content/blog/` — use `BLOG_TEMPLATE.md` in the root as your starting point.
2. Fill in the frontmatter (title, description, pubDate, category, readTime).
3. Write your post content in Markdown below the frontmatter.
4. Commit and push to `main`.
5. Vercel or Netlify auto-deploys in ~30 seconds.

The new post will automatically appear on `/blog`, the homepage blog preview, and the sitemap.

## Project structure

```
src/
├── components/       # Reusable Astro components
├── content/
│   ├── config.ts     # Content Collection schema
│   └── blog/         # Blog posts (.md files)
├── layouts/
│   ├── BaseLayout.astro   # HTML shell + SEO meta tags
│   └── BlogLayout.astro   # Blog post wrapper
└── pages/
    ├── index.astro
    ├── services.astro
    ├── case-studies.astro
    ├── contact.astro
    ├── blog/
    │   ├── index.astro
    │   └── [...slug].astro
    └── sitemap.xml.ts
```

## Customise before launch

- [ ] Replace `hello@adiban.digital` with your real email (search the codebase)
- [ ] Update the WhatsApp number in `Footer.astro` and `contact.astro`
- [ ] Update the LinkedIn URL in `Footer.astro`
- [ ] Replace the `site` URL in `astro.config.mjs` if your domain differs
- [ ] Add real client logos/photos to case studies
- [ ] Connect a form backend (Netlify Forms is pre-wired — just deploy to Netlify)

## Deployment

**Netlify (recommended for forms):** Connect your GitHub repo in the Netlify dashboard. `netlify.toml` handles build config. Netlify Forms will capture contact form submissions automatically.

**Vercel:** Connect your GitHub repo. `vercel.json` handles build config. You'll need a separate form backend (e.g. Formspree, Resend) since Vercel doesn't provide native form handling.
# Adiban-Digital-Landing
