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
- `src/pages/_document.js` — Google Fonts (Inter, Antic Didone). No cookie banner and no privacy/cookie policy links: Iubenda was removed on purpose (2026-10-13).
- Pages: `index.js` (home: closure banner "no longer operating, 2019–2025" at the top, then carousel, features, accordions, press), `philosophy.js`, `gallery.js` (images + plain link to the Vimeo demo, no embed), `404.js`. (`contact.js` and the SendGrid API route were removed on 2026-10-13.)
- Navigation: header menu = Home, Philosophy, Gallery; footer menu = Home, Philosophy. No contact page, no forms, no API routes.
- `src/components/` — Header (desktop/mobile switch via `window.innerWidth` in `useEffect`, so the header is client-rendered only), Footer, Menu, Carousel, Accordion, Head (SEO meta), PhilosophyComponents.
- `public/assets/` — every file there is referenced by code (imported statically or used as the `og:image` path). Check with grep before adding/removing.

## Gotchas
- `next/image` is the modern (13+) component: numeric `width`/`height`, no `layout`/`objectFit` props; use `style` instead.
- `next/link` renders a real `<a>`; `layout.js` has a global `a { color: inherit; text-decoration: none; }` to keep the original look.
- Images are imported with absolute `/public/...` paths — works, leave as is.

## Cookie-free rule
The footer says "This is a cookie-free website". Keep it true:
- No analytics, cookie banners, tracking pixels, or third-party embeds (iframes, players, widgets). The Vimeo demo is a plain link for this reason: the Vimeo player sets Cloudflare cookies (`__cf_bm`, `cf_clearance`) even with `dnt=1`.
- No server-side cookies, no forms that collect personal data.
- Check after changes: build, `npm start`, load each page in `google-chrome --headless=new --user-data-dir=<fresh dir> --virtual-time-budget=15000 --dump-dom <url>`, then `select host_key, name from cookies` on `<dir>/Default/Cookies` (sqlite) must return nothing.
- Google Fonts (`_document.js`) set no cookies, but still send visitors' IPs to Google. Self-hosting with `next/font` would remove that.

## Open items
- Drop `--webpack` from the `dev` script once a stable Next > 16.4.0 ships (see Commands).
- Optional: self-host fonts with `next/font` so no request goes to Google.
- Optional: footer still says "© 2022 Clutch-e Bag" (banner says active 2019–2025); footer menu lacks Gallery. Left untouched, not requested.
