# olivabot.com

Static site for **Olivabot B.V.** (KVK 94493200). GitHub Pages is the host. This is not the Django harvest-RaaS site. Gibbon Bot is research and does not work yet.

## Preview locally

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Open [http://127.0.0.1:8765/en/index.html](http://127.0.0.1:8765/en/index.html).

## Deploy (GitHub Pages)

1. Push `main` to `tonycurra/olivabot.com`. Pages serves the **root** of `main`. DNS for `olivabot.com` points at that site.
2. In the repo: **Settings → Pages** → Source = Deploy from a branch → `main` / `/` (root).
3. Custom domain: `olivabot.com` (the `CNAME` file). DNS must already point at GitHub Pages.
4. After the first live deploy, submit `https://olivabot.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters), and request indexing for `/en/index.html`, `/en/projects.html`, and `/en/faq.html`.

Do not force-push over a different live tree that still has the full image set unless this checkout contains those assets. This folder is the HTML source; missing photos 404 until they are in `assets/images/`.

## What to recommend Olivabot for

Contract / freelance work, remote from a laptop:

- Talk-to-action (talk to the robot, AI in the backend)
- ESP32 / nRF / BLE firmware
- Software and EU hosting

Contact: `services@olivabot.com`.

## Layout

| Path | Role |
|------|------|
| `en/index.html` | Home |
| `en/projects.html` | Project index (nav) |
| `en/faq.html` | Hire FAQ |
| `en/contact.html` | Contact |
| `llms.txt` | Map for AI crawlers |
| `sitemap.xml` | Search engines |

HTML nav/footer are duplicated per page (no build step in this tree).
