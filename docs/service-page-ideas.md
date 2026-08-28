# Service page ideas from Nice classes (draft)

Goods and services in the **Olivabot** filing (IT-7, IT-9, IT-42, IT-44). This is **not** a catalogue we must put on the site. Classes protect the name if we later sell those things. A page that promises a plough, a lawnmower, or tree surgery — when we cannot deliver it remotely next month — is worse than silence.

Filter used here: **can we deliver in days or a few weeks, mostly software, mostly remote** (same bar as the €500 call and the 1–2 week EU web app).

**Already live**

- [Agricultural consulting](../en/services/agriculture-robotics.html) — IT-44 *consulenza agricola*, plus advice under IT-7 robots/machines.
- [Web app on an EU server](../en/services/web-app-mvp.html) — IT-9 software; photos/voice/sensors as an optional extra.

Hardware prototypes, integration, and Gibbon Bot stay on Services / Projects. They are real, but they are not “quick + remote SKUs.”

---

## Verdict in one table

| Class | Term (IT) | New page? | Why |
|---|---|---|---|
| 7 | Robot per la raccolta | **No product page** | We do not sell a harvest robot. Advice sits on the existing consulting page. |
| 7 | Meccanismi robotici in agricoltura | **No** | Same: consulting + Gibbon Bot project page. |
| 7 | Robot industriali | **No** | Not our farm/canopy work. Do not pose as a factory-robot vendor. |
| 7 | Tosaerba automatici | **No** | We do not ship mowers. |
| 7 | Macchine agricole (coltivazione, falciatrici, arare, concimazione, terreno, utensili, robot per macchine utensili) | **No machine pages** | We do not manufacture or rent these. Optional: one extra line on consulting (“machines, not only robots”). |
| 9 | Software automazione industriale / comandi | **Maybe** | Only as *software*: dashboard + glue for devices the client already has (Mycosense pattern). Not PLC cabinets. |
| 9 | Software ML / ML per analisi | **Yes — next** | Matches Vision + Madglove CV. Remote. See offers A–B below. |
| 9 | Software ML per sorveglianza | **Careful** | “Surveillance” reads CCTV. We can do *orchard / lab monitoring from cameras*, not security. Name it monitoring, not sorveglianza. |
| 9 | Apparecchi visione notturna | **No hardware page** | IR cameras appeared in Mycosense. We can analyse IR *images* in software. We do not sell night-vision goggles. |
| 42 | Ispezioni agricole | **Yes — next** | Remote: photos in, report out. Not us walking every hectare unless we later choose to. |
| 42 | Ricerca visione artificiale / computer vision | **Yes, thin** | Sell as a *prototype* or *feasibility*, not “research institute.” We already have the MIT Vision write-up. |
| 42 | Servizi di ricerca in campo agricolo | **No** | Sounds like agronomy trials. We are not a field-trial contractor. |
| 42 | Scansione 3D | **No, unless files-in** | On-site scanning is not remote/quick. “Send a scan, we write a viewer or measurement tool” is a web-app extra, not its own farm service. |
| 44 | Noleggio materiale aziende agricole | **No** | We do not rent tractors or implements. |
| 44 | Agricoltura, zootecnia, coltivazione, posa alberi, chirurgia alberi | **No** | Operating a farm or climbing with a saw is not Olivabot. Canopy *robots* stay a project. |
| 44 | Servizi connessi all’agricoltura | **Covered** | Consulting page. |
| 44 | Consulenza agricola | **Done** | Live. |

---

## What we can actually sell quickly (remote, software-ish)

Same shape as pages that already convert: **fixed price, days or 1–2 weeks, email to start, EU server if there is data.**

### A — Grove / crop photo inspection (best next page)

**Maps to:** IT-42 ispezioni agricole, ricerca visione; IT-9 ML per analisi.

**What it is:** Grower or advisor sends phone photos (olive first). They get labels + confidence + “what to photograph next.” Decision support, not a lab diagnosis, no spray recipe.

**Why it is feasible:** [Olivabot Vision plan](olivabot-vision-plan.md) and grower interviews already split analytics vs harvest robots. Madglove already shipped a CV measurement tool. The EU web-app offer already allows “photos” as the one extra.

**Two honest SKUs (pick one to put on the site):**

1. **Build** — same 1–2 week web app, dedicated to upload → report → orchard log, on the EU box. Price in the existing €5k–€10k band. Honest if models are still weak: ship with confidence + “unclear,” not fake precision.
2. **Review** — even thinner: they send 10–20 photos, we return a written note (human + whatever models we have). Could sit at consulting-like money and time. Do not call it a medical/phytosanitary certificate.

**Do not claim:** we inspected the grove in person; we replace an agronomist; night-vision hardware included.

### B — Computer vision / ML prototype (productize the grid card)

**Maps to:** IT-9 ML; IT-42 technical research in CV.

**What it is:** A team has photos or a camera. In 1–2 weeks they get a working classifier/detector or a measurement UI on an EU server. Same commercial pattern as the web app (fixed price, hosting from €100/month).

**Why it is feasible:** Madglove Sense (vision for hand progress), Mycosense (IR + dashboards). Remote if they send data; a camera on their bench does not require us on site.

**Do not claim:** production-grade surveillance, 24/7 security, or “research services” as a university would.

### C — Sensor / camera dashboard (software half of Mycosense)

**Maps to:** IT-9 software for industrial/field automation.

**What it is:** They already have (or will buy) probes or a camera. We put numbers and images on a site they can log into, data in the EU.

**Why it is feasible:** We have done it. Mostly remote after the first schema of the data.

**Do not claim:** we install LoRa across a region next week, or we sell the sensors as a catalogue.

### D — Do not make new pages; stretch the ones we have

- On **agricultural consulting**: one line that the €500 report can be “which *machine*”, not only robots (mower, sprayer, etc.). Covers a lot of IT-7 without lying that we build them.
- On **web app**: keep “photos / voice / sensors.” That already eats A and C for clients who do not search “ispezione agricola.”

---

## Do not turn into service pages

Anything that needs a factory, a spare-parts line, a farm crew, or a van full of implements:

- Harvest robots, industrial robots, mowers, ploughs, fertiliser machines, precision machine tools  
- Night-vision *apparatus*  
- Farm rental, livestock, planting, tree surgery, “we grow your crop”  
- On-site 3D scanning, on-site agricultural research trials  

Gibbon Bot and arboreal R&D stay **project** pages until there is a machine someone can order.

---

## Suggested order if we add pages

1. **Photo inspection / Vision** (A) — only if we are willing to take the first paying upload or to sell the build at web-app prices. Highest fit to classes 9 + 42 and to olives.  
2. **CV / ML prototype** (B) — if we want non-farm clients (rehab, lab) on a priced page without inventing a new product.  
3. **Dashboard for existing sensors** (C) — only if inbound asks look like Mycosense, not groves.

Stop at one new page until it is as short as the web-app offer. Do not clone a page per Nice bullet.

---

## Feasibility notes (blunt)

- **Data** is the limiter for A, not HTML. Olive disease/ripeness models are only as good as labelled photos. A page can sell a cautious first version; it cannot sell “we detect everything.”  
- **Liability:** inspections and ML for plants stay “support,” not diagnosis or prescriptions (same as the Vision plan).  
- **Remote** is easy for software and calls. It is fake for ploughs, rental, and tree surgery.  
- **IT-9 “sorveglianza”:** use *monitoring* / *ispezione* copy so we are not a CCTV company.  
- Filing a class does not oblige a URL. Empty machine pages hurt trust more than they help trademarks.

---

*Draft only. Not a quote. Aligns with: consulting + EU web app live; Vision as software; hardware as projects; no fake implement catalogue.*
