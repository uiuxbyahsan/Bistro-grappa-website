# Bistro Grappa — Website

A single-page marketing site for **Bistro Grappa**, a riverside bistro at
Obala Kulina bana 10, Sarajevo. Built with Next.js 14 (App Router), Tailwind
CSS, and Framer Motion. Torn-paper section dividers and photo borders, a
self-hosted Segoe Print display face, and an organic forest-green / cream /
gold brand palette.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

> The build fetches **Playfair Display** and **Inter** from Google Fonts via
> `next/font/google`, so the machine that runs `npm run build` needs internet
> access. **Segoe Print** is self-hosted from `fonts/` and needs no network.

## Project structure

```
app/
  layout.jsx        Fonts, metadata, SEO + Restaurant JSON-LD
  page.jsx          Section composition order
  fonts.js          next/font loaders (Segoe Print, Playfair, Inter)
  globals.css       Tailwind layers, buttons, torn-photo + marquee styles
components/          One file per section + shared primitives
  TornDivider.jsx   Ragged section boundary (SVG)
  TornPhoto.jsx     Static torn-paper photo frame
  CollagePhoto.jsx  Animated torn-paper photo (spring + hover)
  Reveal.jsx        Scroll-triggered fade/stagger helpers
  Icons.jsx         All inline SVG icons (no emoji, no icon fonts)
lib/
  site.js           Menu data, contact info, gallery/instagram lists
  torn.js           Deterministic torn-edge geometry (seeded, SSR-safe)
fonts/              Segoe Print TTFs (self-hosted)
public/assets/
  Logo.png
  food/             Photography used across the site
  instagram/        post-1.jpg … post-6.jpg
```

## Updating content

- **Menu, prices, contact, social links** — edit `lib/site.js`.
- **Instagram grid** — replace `public/assets/instagram/post-1.jpg` …
  `post-6.jpg` with the client's latest squares (any size; they are
  center-cropped). Missing files fall back to a gold placeholder tile, never a
  broken image.
- **Food photography** — drop files into `public/assets/food/` and reference
  them from the relevant component or from `lib/site.js`.
- **Map** — the embed and link point at Obala Kulina bana 10 via
  `CONTACT.mapsEmbed` / `CONTACT.mapsLink` in `lib/site.js`.

## Notes

- The reservation form has no backend. On submit it shows a confirmation and
  opens a pre-filled email to `info@bistrograppa.ba`. Point this at a real
  inbox, or wire the handler in `components/ReservationForm.jsx` to an API
  route / form service before launch.
- Pinned to the latest patched Next.js 14 (`14.2.35`). Remaining `npm audit`
  notices are inside Next's own bundled dependencies and only clear by moving
  to Next 16 (a breaking major), which is out of scope for this 14.x build.
```
