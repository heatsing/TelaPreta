# Telapreta.cc

A static black and white screen tool with 15 languages, browser-generated PNG downloads, and screen simulations.

## GitHub Pages

The published files are in `docs/`. Set the GitHub Pages source to **Deploy from a branch**, then select **main** and **/docs**.

To rebuild after editing the source:

```sh
node build.mjs --pages
```

Commit the updated `docs/` together with the source changes. The default build URL is `https://heatsing.github.io/TelaPreta/`. To build for a configured custom domain, set `TELAPRETA_SITE_URL` to its HTTPS base URL.

The navigation shows Feedback when `TELAPRETA_FEEDBACK_URL` contains a valid HTTPS feedback URL.
