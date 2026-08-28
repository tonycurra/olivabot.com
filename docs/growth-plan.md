# Growth plan: getting found, and getting paid

Working note. What the site is for, what is already done, and what is worth doing next — in order of leverage, not in order of fun.

Companion to [being found: search engines and chatbots](seo-and-chatbot-discovery.md), which covers the *how* of SEO and answer-engine citation. This file covers the *what next*.

---

## The positioning decision

**Olivabot is an engineering studio that also builds robots.** Not a robot company that also consults.

That is the choice the site now reflects. It matters because the two readings send visitors to different places:

| Reading | What the visitor concludes | Revenue |
|---|---|---|
| Robot company | "Interesting startup. Nothing for me to buy." | None. Curiosity traffic. |
| Engineering studio | "These people could solve my problem. What does it cost?" | Consulting calls, builds, retainers. |

Gibbon Bot is not demoted by this. It is *promoted* to being the proof: nobody paid us to build it, it had to survive a real olive grove, and the firmware, vision, CAD, and control software behind it are exactly what we sell. A robot you built for yourself is a stronger credential than a testimonial.

**Do not** dilute this by adding service pages for things we cannot deliver remotely in weeks. See [service page ideas](service-page-ideas.md) for the filter.

---

## What was changed (August 2026)

### Crawler visibility — the important one

The navbar and footer used to be injected by JavaScript into empty `<header>` and `<footer>` elements. Googlebot renders JS and mostly coped. **GPTBot, ClaudeBot, and PerplexityBot largely do not** — they fetch raw HTML. Every page therefore looked like an orphan to the crawlers that feed ChatGPT, Claude, and Perplexity: no navigation, no company name, no site structure.

Now the nav and footer are static HTML written into each page by [`tools/build-partials.py`](../tools/build-partials.py). Only behaviour (theme toggle, mobile menu, FAQ accordion) is left in [`assets/js/ui.js`](../assets/js/ui.js).

**Run `python3 tools/build-partials.py` after editing the nav, footer, or breadcrumbs.** It is idempotent. It also regenerates `BreadcrumbList` JSON-LD from the visible breadcrumb on each page, so structured data cannot drift away from the visible text — which is what Google requires.

The footer now carries the legal entity (Olivabot B.V., address, KVK, VAT) on every page. Consistent entity facts repeated across a site are what models use to decide two mentions are the same company.

### Prices are back

They had been removed in favour of "quote after a short email". That was the wrong call for two reasons:

1. **A price is the most quotable fact on a page.** A model answering "who can help me choose a farm robot in Europe?" will cite the page that says €500 over the page that says "contact us". You cannot be recommended for a number you did not publish.
2. **Prices filter, they do not repel.** The people scared off by €5,000 were never going to pay €5,000. Publishing it removes them before they cost an hour of email.

Prices appear in visible copy, meta descriptions, and `Offer` schema on each page. **If a price changes, change all three** and bump `lastmod` in the sitemap.

### Outcome pricing — no day rate, no hourly rate

The site went through two earlier pricing models: €1,600/day, then a benchmarked card at €850–€1,200/day plus €140/hour. Both were wrong for the same reason. **A day rate prices our input; the client is buying an outcome.** It invites comparison against a contractor pool, caps revenue at hours-in-a-year, and makes it impossible to charge what a fix is actually worth when it happens to be quick.

Current model, all excluding VAT:

| What the client gets | Fee | Role in the funnel |
|---|---|---|
| Assessment — call plus a written diagnosis and plan | €500 | Entry point. Small paid commitment that qualifies the buyer and usually leads to a project. |
| Deep technical assessment — profiling or data-flow mapping, prioritised plan | €2,500 | Fintech and performance work, where a €500 call cannot do the job justice. |
| Fixed-scope project — working firmware or software, delivered | €5,000–€10,000 | The core product. |
| Larger engagement — one fee against an agreed result | from €10,000 | Keeps open-ended work out of a fixed box until it has been scoped in a free call. |
| Hosting and maintenance | from €150/month | Recurring floor. |

Every service page carries the line **"We price outcomes, not hours. No day rate, no timesheet."** That is a differentiator in a market full of contractors quoting €95/hour, and it is a crisp claim an answer engine can repeat.

Two consequences to hold onto:

1. **Fixed fees move risk onto us.** If a job runs long, that is our margin, not a bigger invoice. This only works if scoping is honest — hence the paid assessment before anything open-ended, and the "from €10,000" tier for work that cannot be boxed yet.
2. **The €950 quick fix was deliberately dropped.** It read as a day of work in disguise, which undercut the whole position. The €500 assessment is now the smallest thing a stranger can buy.

### Market context (Aug 2026), kept for reference only

This research shaped the earlier rate cards. It is **not published on the site any more** — quoting day rates invites a buyer to divide our fixed fee by days, which is exactly the comparison outcome pricing exists to avoid.

| Benchmark | Figure |
|---|---|
| Live Amsterdam freelance embedded C/C++ BLE contract | €750/day |
| NL contractor day rates, Q2 2026 | €700–€1,000; scarce profiles €1,100+ |
| Freelance embedded engineer, senior | €100–€130/hour |
| Freelance senior software developer (ZZP) | €100–€135/hour |
| Boutique / mid-size agency | €90–€160/hour (≈€720–€1,280/day) |

Useful as a sanity check when quoting: a €7,500 project that takes eight days is ≈€940/day of implied value, which is a healthy place to be. If implied day value drops below ~€700 on repeat work, the scoping is too optimistic.

### One caution on fintech

Amsterdam's HFT and prop-trading firms overwhelmingly hire permanent staff — one live listing states outright that freelance is not possible. The fintech page therefore targets payments, ledgers, risk, and scale-up backend work, and explicitly says we are not an HFT shop. Claiming otherwise would attract nobody and cost credibility with the people who do hire contractors.

### Eight service pages became five

Eight pages diluted the story and made the site read as a generalist. Specialists get recommended; generalists get skipped. The consolidation:

| Was | Now |
|---|---|
| `firmware.html` | **`firmware.html`** — flagship, absorbs CAD as the `#cad` section |
| `efficient-software.html` | **`fintech.html`** — new, aimed at payments and scale-ups |
| `web-app-mvp.html`, `computer-vision.html` | **`software.html`** — software for devices and data |
| `gdpr-consulting.html` | `software.html#gdpr` — kept as a sellable €500 review, not a page |
| `agriculture-robotics.html` | unchanged — the niche differentiator, matches the brand |
| `hosting.html` | unchanged — recurring revenue |

The five retired URLs are **redirect stubs**, not deletions: `noindex, follow`, a canonical pointing at the destination, a meta refresh, and a JS fallback. Nothing 404s and nothing competes with the surviving pages. They were only days old, so almost no authority was lost — this was the cheapest possible moment to restructure.

If these ever need to become real HTTP 301s (better than meta refresh), that requires a host that supports redirect rules; GitHub Pages does not.

### "Consulting", not "freelance"

The site says consultancy and consulting throughout. The word "freelance" now appears in exactly four places, all of them citing the *market* benchmark ("Dutch freelance contractor day rates run €700–€1,000") rather than describing us.

This is not only taste. "Freelance" anchors a buyer to a person-day and invites rate comparison against a contractor pool; "consultancy" anchors to an outcome and defends a higher number. If the day rate ever goes up, this wording is what makes that defensible.

### Social sharing cards

No page had an `og:image`, and eleven pages had no Open Graph tags at all — anything shared on LinkedIn or Slack rendered as a bare text stub. There is now a generated 1200×630 card at `assets/images/og-card.png`, built by [`tools/build-og-image.py`](../tools/build-og-image.py), used as the default across every real page.

**The card has prices baked into it.** Re-run `python3 tools/build-og-image.py` whenever the rate card changes, or the image will contradict the page.

### Hosting became a product

Recurring revenue was previously mentioned once, buried in a FAQ answer. It is now [its own page](../en/services/hosting.html) with a price. This is the best cash-flow item on the list: we already run EU servers, the marginal cost of one more is small, and a retainer is the difference between hunting every month and having a floor.

Every build page now routes to it.

### Client work split from own research

`work.html` is client work (Madglove, Mycofarming) — proof that people pay us and we deliver. `projects.html` is our own robots and research. They used to be mixed under "Projects", which made paid engagements read like hobby projects.

The case study URLs stayed at `/en/projects/…` on purpose. Do not move them; the links are worth more than the tidiness.

Both case studies gained a "the same work, for you" section that translates the specific job into the generic problem a reader might have, and points at the priced services.

### Contact page rebuilt

It was two lines — the highest-intent page on the site with the least on it. Now: both addresses with what each is for, the full postal entity, what to include in the email, a stated two-working-day reply, a three-step "what happens next", and `ContactPage` schema.

---

## What to do next

### 1. Analytics and Search Console — do this today

There is still **no analytics on the site**. Every SEO change below is unmeasurable until there is.

- [ ] Add Plausible, Umami, or GA4 to the page template (add it to `build-partials.py` so it lands on every page at once).
- [ ] Register [Google Search Console](https://search.google.com/search-console) and submit `sitemap.xml`.
- [ ] Register [Bing Webmaster Tools](https://www.bing.com/webmasters) and submit it there too. Bing's index feeds ChatGPT — this is not optional if answer-engine citation is the goal.
- [ ] Check the crawl fix worked: `curl -A "GPTBot" https://olivabot.com/en/contact.html` should show the nav and footer in the raw HTML.

### 2. Make the €500 call self-serve

It is a productised offer being sold like an enterprise engagement. Every CTA on the site is a `mailto:`, which does nothing useful for a large share of visitors and asks a stranger to compose a cold email describing their business.

- [ ] Add a booking link (Cal.com, SavvyCal) with prepayment for the two €500 calls.
- [ ] Add a short form as an alternative to `mailto:` on contact and the service pages. Needs a form backend — a static site cannot post to itself.

### 3. Testimonials and backlinks from the two named clients

Cheapest credibility available and it is one email each.

- [ ] Ask Madglove and Mycofarming for two sentences each, and permission to publish with a name and role.
- [ ] Ask both to link to olivabot.com from their sites. A link from a real medical-device company is worth more than fifty directories.
- [ ] Add the quotes to `work.html` and the relevant case study, with `Review` schema.

### 4. Off-site entity presence

Model recommendations are driven mostly by *other people* saying our name. Currently `sameAs` lists only LinkedIn. In rough order of value:

- [ ] Google Business Profile
- [ ] Dealroom (heavily scraped, strong for Dutch companies)
- [ ] Clutch and The Manifest — LLMs lean on these for agency recommendations
- [ ] Crunchbase
- [ ] Make sure the DLAB, VU, and StartHub pages that already mention us link to us
- [ ] EU agritech and robotics directories
- [ ] A GitHub organisation with a couple of real repositories
- [ ] Keep LinkedIn posting — the hardware stories are genuinely interesting and it is free reach

Add each one to `sameAs` in the homepage `Organization` schema as it goes live. Do not buy spam directories.

### 5. Write the things only we can write

Every page on the site answers "what do you sell". Nothing answers a question someone would type *before* they know suppliers exist. That is where the search volume and the citations are, and these are all writable from direct experience:

- What running a local LLM on an EU VPS actually costs versus the OpenAI API, with real 2026 numbers
- LoRaWAN versus BLE for outdoor soil probes, and what we shipped for Mycofarming
- Which olive-grove jobs a robot can actually do in 2026, and which it cannot
- GDPR when your product has cameras: what actually matters for a small team
- Fitting an IMU, a battery, and a radio onto a finger ring
- What a €5,000 web app gets you, and what it does not

One a month beats six in a weekend. Follow the recipe in [seo-and-chatbot-discovery.md](seo-and-chatbot-discovery.md#new-page-recipe-copy-this).

### 6. Later, if inbound justifies it

- [ ] Dutch and Italian versions. The `/en/` prefix already implies them. Buyers are NL; olive groves are IT, ES, GR. Needs `hreflang` when it happens.
- [ ] A named human on the About page. For a studio this size the founder *is* the product, and both people and models trust a named engineer with a track record over an anonymous B.V.
- [ ] Replace the root `index.html` meta-refresh with a real 301. `olivabot.com/` is the URL people and models cite most.
- [ ] A photo-inspection or CV-prototype page, if inbound starts asking for it. See [service page ideas](service-page-ideas.md) — do not add it speculatively.

---

## How to tell whether it worked

Give it weeks, not days — pages have to be indexed first.

1. **Search Console**: impressions and clicks on the service URLs. Are the price queries landing?
2. **Ask the models directly**, logged out: *"Who can I hire in the EU to write firmware for a battery-powered sensor, if the data has to stay in Europe?"* and *"I have an olive grove. Who gives independent advice on farm robots?"* Note whether Olivabot is named, whether the price is right, and whether the URL is correct.
3. **Inbound quality**: are people arriving already knowing what things cost? That is the price change working.
4. **Retainer count.** One hosting retainer is worth more than a month of one-off enquiries.

If we never appear anywhere: it is crawling and third-party mentions, in that order. It is not more adjectives on the homepage.
