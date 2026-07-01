# nocturne-landing

Landing page for [Nocturne](https://nocturne.thefndrs.com), built with **Qwik**
(Qwik City) and prerendered to static HTML.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build (static)

```bash
npm run build      # → dist/  (static, prerendered)
npm run preview    # serve the built dist/ locally
```

The static adapter prerenders the site to `dist/index.html` plus hashed
assets. Origin is set to `https://nocturne.thefndrs.com` in
`adapters/static/vite.config.ts`.

> Note: we build with Vite directly (`vite build` + the static adapter config)
> instead of the `qwik build` CLI, which has a packaging issue (`Cannot find
> module 'ignore'`) in this version.

## Deploy to nocturne.thefndrs.com

Upload the contents of `dist/` to any static host (Netlify, Cloudflare Pages,
Vercel static, S3+CloudFront, GitHub Pages) and point the `nocturne.thefndrs.com`
DNS/CNAME at it. Serve with long-lived cache headers on `build/` assets.

## Before going live

- Edge and Safari are live.
- Chrome, Firefox, and Opera currently point to the GitHub repo while store listings are pending.
