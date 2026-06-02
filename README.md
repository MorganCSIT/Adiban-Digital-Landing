# Adiban Digital Marketing Website

Production-ready marketing site for Adiban Digital, built with Astro 4, Tailwind CSS v3, and TypeScript.

## Getting Started

```bash
npm install
npm run dev
npm run build
npm run preview
```

The local dev server defaults to `http://localhost:4321`.

## Business Details

Primary site details live in `src/config/site.ts`.

- Email: `adibandigital@gmail.com`
- WhatsApp: `+66 81 085 1211`
- Address: `7/7 Moo 8, Aoyon Khaokad, T. Wichit, A. Muang Phuket 83000, Thailand`

## Domain Configuration

Set `PUBLIC_SITE_URL` in the deployment environment when the final domain is active.

Example:

```bash
PUBLIC_SITE_URL=https://adiban.digital
```

This value feeds Astro canonical URLs, Open Graph URLs, `robots.txt`, and the sitemap.

## Contact Form

The contact form posts to FormSubmit using `adibandigital@gmail.com`, so it works on static hosts such as Vercel and Netlify without a custom backend.

On the first live submission, FormSubmit may send a confirmation email to activate the address. Complete that once, then future enquiries will arrive by email.

## Deployment

Both Vercel and Netlify can build this project.

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```

Do not commit generated folders such as `dist`, `.astro`, `.vercel`, or `node_modules`; they are ignored by `.gitignore`.

## Publishing a Blog Post

1. Create a new `.md` file in `src/content/blog/`.
2. Use `BLOG_TEMPLATE.md` as a starting point.
3. Fill in the frontmatter: `title`, `description`, `pubDate`, `category`, and `readTime`.
4. Write the post content in Markdown.
5. Build locally before deploying.

The post appears on `/blog`, the homepage blog preview, and the sitemap.
