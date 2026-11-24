# Telapreta.cc

A static solid-color screen tool with 15 languages, fullscreen previews, browser-generated PNG downloads, and screen simulations.

Each color has a dedicated URL, such as `/blue-screen/` or `/zh/blue-screen/`. The original language home pages and white-screen URLs, including `/White-screen/`, redirect to the corresponding color page.

## Netlify

Netlify builds with `node build.mjs` and serves `dist/`. Canonical URLs and share links use the site's primary Netlify URL, including its custom domain when configured.

## GitHub Pages

The published files are in `docs/`. Set the GitHub Pages source to **Deploy from a branch**, then select **main** and **/docs**.

To rebuild after editing the source:

```sh
node build.mjs --pages
```

Commit the updated `docs/` together with the source changes. The default build URL is `https://heatsing.github.io/TelaPreta/`. To build for a configured custom domain, set `TELAPRETA_SITE_URL` to its HTTPS base URL.

The navigation shows Feedback when `TELAPRETA_FEEDBACK_URL` contains a valid HTTPS feedback URL.
