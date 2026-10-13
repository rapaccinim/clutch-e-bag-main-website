@AGENTS.md

# Clutch-e Bag — archived marketing site

Static marketing site for Clutch-e Bag srl (first startup, no longer active), kept online at clutchebag.com for history and web presence. **Archive mode:** keep changes minimal, keep it building, don't redesign. Read `CLAUDE_LOG.md` for the history of agent sessions and append a new entry when you finish work.

## Stack
- Next.js 16 **Pages Router** (`src/pages`), React 19, plain JavaScript (no TypeScript, no ESLint, no tests).
- Styling: `styled-jsx` only (`<style jsx>` blocks inside each component; global rules in `src/components/Layout/layout.js` and `mobileHeader.js`). No CSS files.
- Node 24.x (`engines` in `package.json`), **npm** (`package-lock.json`). Do not reintroduce yarn.
- Deployed on Vercel from `main`. `dev` branch was historically used for development.

## Commands
- `npm install`
- `npm run dev` — dev server, **runs on webpack** (`next dev --webpack`). Turbopack dev in Next 16.4.0 fails to emit page modules on `/`, `/philosophy`, `/gallery` ("module factory is not available" in the browser). Fixed in `16.5.0-canary.9`; drop `--webpack` once a stable release > 16.4.0 is out, and verify every page in a browser with a clean `.next`.
- `npm run build` — the only automated check. Run it after every change.
- `npm start` — serve the production build (Turbopack, works fine).
- `AGENTS.md` is Next's own agent rules file, (re)written by `next dev`; commit it if it changes.

## Layout
- `src/pages/_app.js` — wraps every page in `Layout` (Header + main + Footer).
- `src/pages/_document.js` — Google Fonts (Inter, Antic Didone) + Iubenda cookie banner script (legal requirement, keep it).
- Pages: `index.js` (home: carousel, features, accordions, press), `philosophy.js`, `gallery.js` (images + Vimeo iframe), `contact.js` (form), `404.js`.
- `src/pages/api/sendgrid.js` — contact form backend; needs `SENDGRID_API_KEY` env var. Without it the form fails; that is accepted.
- `src/components/` — Header (desktop/mobile switch via `window.innerWidth` in `useEffect`, so the header is client-rendered only), Footer, Menu, Carousel, Accordion, Head (SEO meta), PhilosophyComponents.
- `public/assets/` — every file there is referenced by code (imported statically or used as the `og:image` path). Check with grep before adding/removing.

## Gotchas
- `next/image` is the modern (13+) component: numeric `width`/`height`, no `layout`/`objectFit` props; use `style` instead.
- `next/link` renders a real `<a>`; `layout.js` has a global `a { color: inherit; text-decoration: none; }` to keep the original look.
- Images are imported with absolute `/public/...` paths — works, leave as is.

## Contact form
- `src/pages/api/sendgrid.js` sends a **plain-text** email (no HTML) so user input never needs escaping, and it does not log the request body. Keep it that way.
