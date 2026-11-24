# TelaPreta.cc

A Next.js App Router site with 15 languages, fullscreen color previews, browser-generated PNG downloads, screen simulations, and a Portuguese monitor test. Content pages are generated at build time and served as static files.

Each color has a dedicated URL, such as `/blue-screen/` or `/zh/blue-screen/`. The original language home pages and white-screen URLs, including `/White-screen/`, redirect to the corresponding color page.

Prank screens, update simulations, and screensavers also have dedicated URLs, such as `/radar-screen/` or `/zh/flip-clock-screen/`.

## Local development

```sh
npm ci
npm run dev
```

Run `npm run build` to export the static site to `out/`.

## Netlify

Netlify runs `npm run build` and serves `out/`. Canonical URLs and share links use the site's primary Netlify URL, including its custom domain when configured.

## GitHub Pages

The published files are in `docs/`. Set the GitHub Pages source to **Deploy from a branch**, then select **main** and **/docs**.

To rebuild after editing the source:

```sh
npm run build:pages
```

Commit the updated `docs/` together with the source changes. The default build URL is `https://heatsing.github.io/TelaPreta/`. To build for a configured custom domain, set `TELAPRETA_SITE_URL` to its HTTPS base URL.

The navigation shows Feedback when `TELAPRETA_FEEDBACK_URL` contains a valid HTTPS feedback URL.
