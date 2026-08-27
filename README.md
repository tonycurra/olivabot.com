# Olivabot website

Static site for [olivabot.com](https://olivabot.com). English pages live under `en/`. GitHub Pages serves `main`; the custom domain is in `CNAME`.

## Layout

| Path | Role |
|---|---|
| `index.html` | Redirects to `/en/index.html` |
| `en/` | Pages (home, about, contact, services, DLAB, projects, legal) |
| `assets/css/style.css` | Shared styles |
| `assets/js/` | Navbar and footer injected into each page |
| `assets/images/` | Media — see [assets/images/README.md](assets/images/README.md) |
| `sitemap.xml` | Listed URLs for search engines |

Navbar and footer use absolute paths (`/en/…`, `/assets/…`) on the live site, and relative paths when you open HTML from disk.

## Pages

- Home, About, Contact, [Services](en/services.html), [DLAB](en/dlab.html)
- Projects: [Gibbon Bot](en/projects/gibbon-bot.html), [Olivabot Vision](en/projects/vision.html), [Mycosense](en/projects/mycosense.html), [Madglove Sense](en/projects/madglove-sense.html), [Arboreal robots](en/projects/arboreal-robots.html)
- Legal: privacy, terms, cookies, disclaimer

When you add a public page, add it to `sitemap.xml` and (if it belongs in the menu) `assets/js/navbar.js`. For search engines and chatbots (ChatGPT, Google AI, Claude, Perplexity), see [docs/seo-and-chatbot-discovery.md](docs/seo-and-chatbot-discovery.md).

## Publish

Commit on `main` and push to `origin`. GitHub Pages rebuilds from that branch.
