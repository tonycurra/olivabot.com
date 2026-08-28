# Olivabot Vision — software plan (draft)

Quick plan for a **photo-in, analytics-out** web app. Growers upload pictures of trees; the system returns what it sees: fruit, disease, pests, nutrient deficiencies.

This is a **software product**, not the Gibbon Bot camera study. The [MIT feasibility work](../en/projects/vision.html) already showed growers want this analytics slice. Same models can later feed the robot; v1 does not need the robot.

**Hosting:** you put the server online (dedicated EU VPS). App and models run there. No third-party AI APIs unless you later choose to.

---

## 1. What it is

A simple web app:

1. User takes a photo (phone, later drone / robot).
2. Uploads it (optional: crop, orchard, tree, notes, GPS).
3. Gets a report: labels + confidence + short explanation + “what to look at next”.
4. History of scans per orchard / tree.

**v1 crop:** olive.  
**Later:** other orchard trees (apple, pear, citrus, …), then “any tree” with a weaker, more generic model.

This is **decision support**, not a lab diagnosis. Always show confidence and a disclaimer.

---

## 2. Who it is for

- Olive growers who walk the grove with a phone.
- Advisors / agronomists who need a log, not a one-off guess.
- Later: same API for Gibbon Bot or fixed cameras.

Interviews already split: some farms want **analytics** (ripeness, pests, disease); others want harvest robots. This product is the analytics side.

---

## 3. What the model should answer (olives first)

Each upload is classified into **subject** (fruit / leaf / bark / whole canopy / unclear) then one or more of:

| Task | Examples (olive) | Notes |
|---|---|---|
| Fruit type / state | Cultivar guess if possible; green / turning / ripe / overripe; count in frame | Ripeness for harvest timing is the high-value ask |
| Disease | Peacock spot (*Spilocaea*), olive knot, anthracnose, verticillium wilt (leaf), sooty mould | Leaf + fruit photos; bark for knot |
| Pests | Olive fruit fly damage, moth, scale, visible insects | Often **damage signs**, not the insect itself |
| Nutrient deficiency | N, K, Fe, B, Mg (typical leaf patterns) | Easy to confuse with drought, salt, spray burn — keep confidence honest |
| “Healthy / unclear” | No finding, or photo too bad | Always an option; refuse junk photos |

Output shape (v1):

- Primary finding + confidence
- 2–3 alternatives
- Affected part (fruit / leaf / wood)
- Severity (low / medium / high) if the model is willing
- Suggested next photo (e.g. “underside of leaf”, “close-up of fruit”, “trunk”)
- Plain-language note, not a spray prescription (liability)

---

## 4. Product shape (v1)

**In**

- Login (one org, a few users)
- Upload 1–20 photos (JPEG/WebP, phone sizes)
- Optional metadata: orchard name, tree id, date (default now), notes
- Photo tips on the upload page (daylight, leaf + fruit, no heavy flash)

**Out**

- Per-photo card: thumbnail, findings, confidence, disclaimer
- Simple orchard log (list / filter by date)
- Export: PDF or CSV of a session (for the advisor)

**Out of v1**

- Prescriptions, chemical recommendations
- Multi-tenant SaaS marketplace
- Real-time video
- Robot control
- Native mobile app (responsive web is enough)

---

## 5. How it runs (self-hosted)

You own the box. Typical layout:

```
Phone / browser
    → HTTPS (Caddy or nginx)
        → Web app (upload, accounts, history)
            → Queue (Redis or just a folder + worker)
                → Vision worker (GPU if you have one, else CPU)
                    → DB (Postgres) + image store (disk)
```

- **EU VPS** you provision (same pattern as the [web app MVP offer](../en/services/web-app-mvp.html)): SSH keys, firewall, HTTPS, backups.
- Images stay on that disk. Back up encrypted; define retention (e.g. 12 months).
- Models run **on the server**. No OpenAI / cloud vision APIs by default (GDPR, cost, grove photos are farm data).
- GPU is nice (small NVIDIA box or a GPU VPS). CPU-only is acceptable for a slow prototype (seconds per image).

**Stack (suggestion, not locked):**

- App: Python (FastAPI) or similar + a thin HTML/JS front
- Worker: same Python, PyTorch / ONNX
- DB: Postgres
- Auth: simple accounts, not OAuth-to-Google unless you want it

---

## 6. Models — keep it staged

Do **not** train a giant “all trees, all diseases” net first.

### Phase A — olives, good-enough

1. **Gate:** is this a plant photo? olive-ish? fruit vs leaf vs bark vs junk.
2. **Specialists:** small classifiers / detectors per family (fruit state, leaf disease, pest damage, nutrient-like chlorosis).
3. **Fallback:** a local vision-language model (VLM) on the same server for “describe + guess”, always labelled as weaker / uncalibrated.

Start with public olive / orchard datasets + your own grove photos. Fine-tune a lightweight detector (YOLO-class) for fruit and obvious lesions; use a classifier for leaf symptoms.

Accuracy will be uneven. Ship with **confidence + “needs better photo”** rather than fake precision.

### Phase B — more trees

- Add a **crop selector** (olive / apple / … / unknown).
- Per-crop model packs (weights + label lists). Unknown crop → generic “tree health” model only.
- Same UI, different weights on disk. No rewrite.

### Phase C — robot / cameras

- Same API: `POST /analyze` with an image.
- Gibbon Bot or a pole camera dumps frames into the queue.
- That is when the MIT study (edge camera, later sync) plugs in. v1 does not wait for it.

---

## 7. Data you will need

Without labelled photos this is a demo, not a product.

- **Your groves:** fruit at several ripeness stages, healthy leaves, known problems, bad photos (shade, blur, rain).
- **Public sets:** PlantVillage-style leaf disease, any olive fruit-fly / peacock-spot sets you can legally use.
- **Grower loop:** after each report, optional “agree / not this / missing” — that becomes the next training set.

Store: original image, thumb, model version, raw scores, user feedback. You need the version tag to debug later.

---

## 8. Implementation phases

| Phase | Goal | Rough size |
|---|---|---|
| **0. Fence** | Label lists for olive only, photo protocol, legal disclaimer, server choice | Days |
| **1. Pipe** | Upload → store → dummy report (hardcoded) on your VPS | ~1 week |
| **2. Olive brain** | Real models for fruit state + 1–2 diseases/pests + nutrient-like leaf symptoms | Few weeks, data-limited |
| **3. Log** | Orchard/tree history, export, feedback buttons | Short |
| **4. More trees** | Crop packs, generic fallback | When olive is useful |
| **5. Ingest** | API for robot / trap cameras | After the app is used |

Phase 1 can follow the existing 1–2 week web-app MVP pattern (login, one flow, EU server, handoff). The vision worker is the extra piece.

---

## 9. Risks (be blunt)

- **Lookalike symptoms** — drought vs N vs salt vs herbicide. Model must say “possible” and ask for a second photo / soil test.
- **Data** — olive-specific public data is thin. Your own photos matter more than architecture.
- **Liability** — never output “spray X”. Findings + “talk to an advisor”.
- **Light and occlusion** — same issues as the Gibbon study. Phone photos in midday shade will fail; UI should coach the shot.
- **GPU cost** — a small GPU VPS in the EU vs CPU-only latency. Decide at phase 0.
- **GDPR** — farm photos can include people, houses, GPS. Strip EXIF GPS if the user did not opt in; retention policy; DPA if you host for a customer.

---

## 10. Success for the first version

Ship when a grower can, in one visit:

- Upload 5 olive photos from the phone
- Get fruit ripeness + at least one disease/pest/deficiency path that is **not embarrassing** on typical grove shots
- See them again next week in a log

Then expand tree species. Do not wait for “any tree” before putting the server online.

---

## 11. Open choices (decide at build time)

- GPU vs CPU VPS
- Detector family (YOLO / other) vs VLM-first prototype
- One org (you + testers) vs handing a customer their own box
- Keep this repo as marketing only, new repo for the app (recommended)

---

*Draft only. Not a quote, not a public spec. Aligns with Olivabot Vision grower interviews: analytics first, olives first, server you run.*
