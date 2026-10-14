# Zoe Ayomikun AYETIGBO

A calm, blue family website built with Next.js App Router, React, and TypeScript.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build` then `npm start`.

## Pages

- `/`: introduction, name meanings, interactive photo album, parents, and ceremony invitation.
- `/ceremony`: all 13 programme items, ceremony time, blessing, meanings, appreciation, and an updated downloadable SVG programme (1:00 PM–2:30 PM).

## Organization

- `src/app`: routes, metadata, icon, and shared design tokens/styles.
- `src/components`: shared navigation/footer and accessible native-dialog album.
- `src/lib/content.ts`: programme and photo content.
- `public/images`: web-compatible family photos, original programme artwork, and the corrected SVG download.

The design uses a shared powder-blue/ivory palette, consistent spacing, serif headings, responsive layouts, keyboard focus states, and reduced-motion support. Fonts use system fallbacks, so the build does not depend on an external font service.

All seven supplied HEIC photographs were converted to JPEG; originals remain untouched. The programme’s unfilled speaker placeholders are omitted from the displayed list. No date or venue has been invented. Search indexing is disabled through metadata by default. There is no authentication; deploy privately if access must be restricted.

## Checks

```sh
npm run typecheck
npm run lint
npm run build
```

Browser/screenshot verification is intentionally excluded at the owner's request.
