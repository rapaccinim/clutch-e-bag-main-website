# Clutch-e Bag: main website
Main website for Clutch-e Bag srl.

## About
This website is powered by [Next.js](https://nextjs.org/) framework.

This website is deployed on [Vercel](https://vercel.com/).

We use Vercel's _CSS-in-JS_ approach with `styled-jsx`. Read [here](https://nextjs.org/blog/styling-next-with-styled-jsx) more about it. 

## Run locally
- Node.js 24.x and npm (the project switched from `yarn` to `npm` in 2026)
- `npm install` to install dependencies
- `npm run dev` to run the local server, `npm run build && npm start` for a production build
- the contact form needs a `SENDGRID_API_KEY` env var (e.g. in `.env.local`); without it, the rest of the site works fine

## Git Versioning
* use the `dev` branch for development purposes
* **do not use** the `main` branch, it's for production deploys only!

## Dependencies
* [`@sendgrid/mail`](https://www.npmjs.com/package/@sendgrid/mail) for sending emails through the contact form

## Figma layout
Figma design is [here](https://www.figma.com/file/pzKV1wonWDrhdZBNQ84JET/Clutch-e-bag-Wireframe?node-id=1%3A2).

Thanks [Laura Paveglio](https://readthefmanual.it/) for the UX/UI design.

## Authors
* [Marco Rapaccini](https://github.com/rapaccinim) - Web Engineer
* [Leonardo Russo](https://github.com/LeonardoRusso1) - J. Dev
* [Marco Peretto](https://github.com/mperetto) - J. Dev
