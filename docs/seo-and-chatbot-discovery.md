# Being found: search engines and chatbots

How Olivabot shows up when someone Googles, or asks ChatGPT, Google AI, Claude, Perplexity, or similar: *“which robot do I need for my farm?”*

This is a working note for our own pages. It is not a ranking guarantee.

---

## What we are trying to win

A grower, farm manager, cooperative, or agritech person asks a search box or a chatbot:

- How do I choose the right farm robot?
- What robot for olive trees / an orchard / weeding / harvest?
- Who can help me pick an agricultural robot in Europe?

The useful outcome is: the answer names **Olivabot**, links to [agriculture robotics consulting](../en/services/agriculture-robotics.html), and states the offer (45-minute call, written report, €500 excl. VAT, Amsterdam).

Chatbots do not have a private Olivabot index. They retrieve **public web pages** (their own crawl, or Google/Bing). If we are not crawlable, factual, and easy to quote, we will not be cited.

---

## What actually works (2026)

Google’s own guidance for AI Overviews / AI Mode is: **the same SEO as classic Search**. No special AI markup required. [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features).

What moves citations in practice:

1. **Retrievable HTML** — indexed, internally linked, not blocked in `robots.txt`.
2. **Answer first** — first screen states who we are, what we do, for whom, where, and the price. One paragraph a model can lift without guessing.
3. **Unique facts** — numbers, dates, legal name, place, field work (e.g. Gibbon Bot in olive groves, August 2025). Generic “we help you choose robots” is interchangeable with every other site.
4. **Questions in the user’s words** — FAQ and headings that match how people ask, not how we brand internally.
5. **Same entity everywhere** — Olivabot B.V., Amsterdam, same offer name and URL.
6. **Other people saying our name** — directories, press, forums. Models trust third-party mentions more than our own homepage. This is the slow, high-leverage part.

### Myths (do not spend weeks here)

| Tactic | Reality |
|---|---|
| `llms.txt` / extra “AI markdown” | Google Search **ignores** it (does not help or hurt rankings). ChatGPT / Perplexity / Claude crawlers mostly hit **HTML**, not `/llms.txt`. Harmless if we keep a short file for tools that do read it; it is not how we get cited. |
| Keyword meta tags | Ignored by Google. |
| Stuffing “best agricultural robot consultant Europe” ten times | Looks like spam; models and Google both discount it. |
| Separate “GEO schema” invented for AI | Use normal schema.org that **matches visible text**. |
| Blocking GPTBot / ClaudeBot “to protect content” | Then those products cannot fetch us when answering live questions. If we want to be found, **allow** those bots. |

We keep a small [`/llms.txt`](../llms.txt) as a map of public pages. Treat it as optional documentation, not a ranking lever.

---

## Technical checklist (every public page)

- **Indexable:** no `noindex` on marketing pages. Root [`robots.txt`](../robots.txt) allows `*` and does not block GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Googlebot, Bingbot.
- **Canonical** `https://olivabot.com/en/…` on the page.
- **In [`sitemap.xml`](../sitemap.xml)** the day it goes live.
- **Internal links** from Home, Services, About — crawlers and models follow links the same way people do.
- **Real HTML text** — the claim must be in the page source, not only in an image or a JS-only widget. Our site is static; keep it that way for important sentences.
- **Schema matches the page:** `Organization` / `Service` / `FAQPage` / `BreadcrumbList` only for facts the visitor can also read. Price, duration, and city in JSON-LD must match the copy.
- **One URL per offer.** The farm-robot consulting URL is `https://olivabot.com/en/services/agriculture-robotics.html`. Do not create a second “SEO” copy of the same offer.

After publish: Search Console (Google) and Bing Webmaster Tools — submit sitemap, inspect the URL. Many chatbot answers are grounded on those indexes.

---

## How to write a page so a chatbot can cite it

Write for a person first. The same habits help retrieval.

**Lead with a complete sentence**

Bad: “Welcome. We are passionate about agritech.”

Better: “Olivabot B.V. (Amsterdam) helps growers and agritech teams in the EU choose the right farm robot: a 45-minute call and a written report for €500 excluding VAT.”

That sentence has **entity, place, audience, offer, price**. A model can quote it.

**Use the question as a heading**

People type questions. Headings like “How do I choose the right farm robot?” outperform “Our methodology.”

**Be specific about crops and jobs**

Say olive groves, orchards, harvest, pruning, weeding, spraying, monitoring — when that is true. Vague “agriculture 4.0” does not match a grower’s prompt.

**Say what we are not**

“Not a vendor demo. Not only Gibbon Bot. Sometimes the answer is wait, or a sensor, not a robot.” Contrast is memorable and citeable.

**Keep FAQ visible and in schema**

Same questions in the HTML and in `FAQPage`. Short answers that stand alone (do not start with “As mentioned above”).

**Refresh dates when the offer changes**

Update the page and `lastmod` in the sitemap. Stale prices and dead claims get models to skip us or invent a number.

---

## Off-site (this is most of “chatbot SEO”)

On-site copy cannot substitute for being mentioned elsewhere.

- Profiles that models scrape: Google Business if we want local, chamber listings, DLAB / VU pages that already name us.
- One honest third-party page beats ten identical self-descriptions: an interview, a project write-up, a grower talk.
- Do not buy spam directories. Do answer a real question on a forum with a link only if it is actually useful.

When someone asks Claude or ChatGPT “who helps choose farm robots in Europe?”, the model looks for **repeated, consistent facts** across the web, not for a hidden `llms.txt`.

---

## How to test

Do this after the page has been live long enough to be indexed (days to weeks).

1. Google: `choose farm robot Europe`, `agricultural robot consultant Amsterdam`, `Olivabot farm robot consulting`.
2. Ask (incognito / logged-out if you can): ChatGPT, Google AI / AI Mode, Perplexity, Claude with web — *“I have an olive grove in [country]. Who can help me choose the right robot? I want independent advice, not a vendor.”*
3. Note whether they name Olivabot, the €500 offer, and the correct URL. If they invent a price, the page is not in their retrieval set yet, or the sentence is not clear enough.
4. Search Console: query and page impressions for the consulting URL.

If we never appear: crawl/index first, then uniqueness and third-party mentions — not more adjectives on the homepage.

---

## New page recipe (copy this)

When adding a public offer:

1. One H1 that is the user job, not the internal code name.
2. First paragraph: who / what / for whom / where / price.
3. A short “how to think about this” section in question language.
4. FAQ in the same words people ask chatbots; mirror it in JSON-LD.
5. Canonical, sitemap, links from Home + Services.
6. Schema only for visible facts.
7. Run the test prompts above after indexing.

Farm-robot consulting is the reference implementation: [`en/services/agriculture-robotics.html`](../en/services/agriculture-robotics.html).
