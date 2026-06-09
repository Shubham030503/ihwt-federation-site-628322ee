# IHWT Federation Website

**Live Site:** [https://ihwt-federation-site.lovable.app](https://ihwt-federation-site.lovable.app)

International Health, Wellness & Tourism Federation — premium event & federation website built with TanStack Start, React 19, Tailwind CSS v4 and TypeScript.

## Tech Stack

- TanStack Start (file-based routing + SSR)
- Vite 7
- React 19
- Tailwind CSS v4
- TypeScript

## Local Development

```bash
bun install
bun run dev
```

The app runs at http://localhost:5173.

## Build

```bash
bun run build
```

Output is generated in `.output/` (Nitro server build) and `.output/public/` (static assets).

## Deploy to Vercel (via GitHub)

1. Push this repository to GitHub.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects the build via `vercel.json`:
   - Build command: `bun run build`
   - Output directory: `.output/public`
   - `NITRO_PRESET=vercel` is set for proper SSR bundling.
4. Click **Deploy**.

No additional environment variables are required for the base site. If you later add Lovable Cloud (Supabase) or other integrations, copy those secrets into the Vercel project settings.

## Project Structure

```
src/
  assets/          Static images
  components/      Reusable UI (Navbar, Footer, RegisterButton, WhatsAppButton, Countdown)
  lib/             Constants (Google Form URL, WhatsApp number, etc.)
  routes/          File-based routes (index, about, events, membership, awards, contact, register)
  styles.css       Tailwind v4 + design tokens
public/
  og-image.jpg     Open Graph share image
  robots.txt
```

## Registration

All "Register Now" CTAs link to the official Google Form defined in
`src/lib/constants.ts` (`REGISTRATION_URL`). The dedicated `/register` page
also embeds the form via iframe.

## WhatsApp

Floating WhatsApp button and contact links use the number defined in
`src/lib/constants.ts` (`WHATSAPP_NUMBER`).
