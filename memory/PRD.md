# A2Z Plant Nutrient — Website PRD

## Original Problem Statement
Rebuild the a2zplantnutrient.com website using the shared Next.js codebase and content from the live site. Add public admin pages (`/add-blog`, `/add-media`) for regularly updating content. Include real logo, images, videos and career openings. Improve UX with animations.

**Follow-up brief (in-session repositioning)**: A2Z is not a small home-gardening business — it is a ₹6.84 Cr order-book, ISO 9001 & 14001 certified, DPIIT-recognized government/PSU horticulture EPC contractor with 100+ staff working across multiple states. Site must reflect that scale and credibility. Explicit asks: fix broken social/CTA links, remove or verify testimonials, add certifications strip, add CIN/GSTIN in footer, add founder section (Abhishek Agrawal), add named-project portfolio (NHAI, NTPC, NFL, BHEL, VDA, Hindustan Copper), replace vanity stats, split site into two tracks (EPC + CraftMyGarden teaser), populate real blog posts, and reflect pan-India footprint.

## Architecture
- **Frontend**: Next.js 14 (App Router) at `/app/frontend`, port 3000, hot-reload via `yarn start` (aliased to `next dev -H 0.0.0.0 -p 3000`).
- **Backend**: FastAPI at `/app/backend`, port 8001, prefix `/api`.
- **DB**: MongoDB (local, `DB_NAME=test_database`). Collections: `blogs`, `media`, `careers`, `contacts`.
- **External URL**: `https://a2z-plant-dynamic.preview.emergentagent.com`
- **Animation stack**: Framer Motion + custom `Motion.jsx` helpers (`FadeIn`, `Stagger`, `StaggerItem`, `ScaleIn`, `FloatingLeaf`) and animated `Counter` component.
- **Content storage**: Media (images/video) and cover images stored as base64 data URIs in MongoDB, per user preference.

## User Personas
1. **PSU / Govt Procurement Officer** — needs certifications, CIN/GSTIN, past-PO evidence and financial credibility at a glance.
2. **Corporate ESG/Facility Manager** — needs proof of scale (workforce, order book) and multi-year AMC capability.
3. **A2Z Founder / Admin** — needs a simple, no-friction way to publish blogs and gallery items regularly.
4. **Future residential customer** — introduced to the upcoming CraftMyGarden brand via teaser.

## Core Requirements (static)
- Public marketing site with EPC positioning.
- Public admin CMS for Blogs + Media (no auth per user request).
- Base64 media storage in MongoDB.
- Real logo & real client references (NHAI, NTPC, NFL, BHEL, VDA, Hindustan Copper).
- Certifications visible (ISO 9001, ISO 14001, DPIIT, Udyam, CII Carbon-Footprint).
- Footer with CIN, GSTIN, Udyam number (placeholder patterns — user to update with real codes).

## Implemented (2026-01-13)
### Public pages
- `/` Home — EPC hero, ₹6.84 Cr order-book callout, certifications strip, client marquee, real STATS (order book / workforce / states / founded), features, projects preview, about snippet, founder card (Abhishek Agrawal), EPC services grid, CraftMyGarden coming-soon teaser, dynamic blog preview (only shows if blogs exist), procurement CTA **with "Request Company Profile" modal**.
- `/about` — Company intro, mission/vision/values, real stats, certifications, founder card.
- `/services` — Two-track split (EPC vs CraftMyGarden teaser), 6 EPC services, why-us block with certifications.
- `/projects` — 6 named EPC projects with metrics + **prominent "Request Company Profile" banner** at the top + secondary CTA at the bottom.
- `/company-profile` — **Printable one-page profile** (personalised via `?for=&org=` URL params). Includes CIN/GSTIN/Udyam block, all certifications, company snapshot, leadership bio, EPC portfolio, tabular PO summary of all 6 named projects with metrics, clients strip and contact details. One-click **Download / Print PDF** via browser print (print CSS included).
- `/gallery` — Dynamic media grid with lightbox; falls back to real static images if backend empty.
- `/careers` — Dynamic (from `/api/careers`); 4 seeded EPC-relevant roles + application form.
- `/blog` — Dynamic list w/ search + category filter + link to `/add-blog`.
- `/blog/[slug]` — Full article view w/ share button.
- `/contact` — Real address, phone, email, working hours + form posts to `/api/contact`; Google map embed.

### Admin pages (public — no auth)
- `/admin` — Dashboard with tabs (Blogs / Media), delete with confirmation, links to add pages.
- `/add-blog` — Form: title, excerpt, content, author, category, tags, cover image (upload → base64, or URL).
- `/add-media` — Form: title, description, category, image/video toggle, upload (base64) or URL.

### Backend endpoints (`/api/*`)
- `GET /` health
- `POST/GET /blogs`, `GET /blogs/{slug}`, `PUT /blogs/{id}`, `DELETE /blogs/{id}` — with `?q=` and `?category=` filters.
- `POST/GET /media`, `DELETE /media/{id}`.
- `POST/GET /careers`, `DELETE /careers/{id}`.
- `POST /contact`.
- **`POST /profile-requests`** — captures procurement-officer leads. **`GET /profile-requests`** — lists submissions (for admin).
- `POST /seed` — idempotent seed of 3 EPC blogs, 4 careers, 10 media (also runs auto-seed on startup if empty).

### Design
- Font pairing: **Fraunces** (display) + **Manrope** (body) — moved off the generic Playfair/Inter default.
- Palette: deep emerald 950 / amber accents / warm stone neutrals.
- Micro-animations everywhere: floating hero blobs, leaf-drift decor, staggered card reveals, animated stat counters, image zooms, page-in fades.
- Real A2Z logo (`/logo.png`) in header + footer.
- All interactive elements have `data-testid` attributes.

### Content sourced from a2zplantnutrient.com
- Logo (`/logo.png`)
- Project images (`/project01.jpg`, `/project02.jpg`)
- Service imagery (`/service_01.jpg` through `/service_08.jpg`)

### Repositioning changes vs. shared Next.js starter
- Nav updated: Gifting removed → replaced with **Projects**.
- Old residential/Varanasi hero replaced with EPC positioning.
- Vanity stats ("1000+ Landscapes, 500+ Clients, 4+ Years") **removed** and replaced with verifiable stats (₹6.84 Cr order book, 100+ workforce, 5+ states, founded 2021).
- Unverified testimonials **removed** from site.
- Broken `#` social icons **removed** from footer.
- Broken "Explore More About Us" → `#` link **fixed** (points to `/about`).
- Footer copyright uses `new Date().getFullYear()` (current year auto).
- Added CIN / GSTIN / Udyam placeholders in footer.
- CraftMyGarden **coming-soon** teaser section added on home and services pages.
- Blog auto-seeded with 3 real, EPC-relevant posts (Tender Compliance, Compensatory Afforestation, PSU AMC Playbook).
- Multi-state / pan-India language throughout copy.

## Implemented (2026-01-13)
### Public pages
- `/` Home — EPC hero (with tagline **"From Tender to Tree"** and three CTAs: Discuss a Tender, **Get a Quote**, View Projects), ₹6.84 Cr order-book callout, certifications strip, client marquee (now includes **Indian Oil**), real STATS (order book / workforce / states / founded), features, **new "Our Institutional Clients" section with 6 named PSU/gov cards (NHAI, NTPC, NFL, Indian Oil, BHEL, Hindustan Copper) each with a sentence of context**, projects preview, about snippet, founder card (Abhishek Agrawal), EPC services grid, CraftMyGarden coming-soon teaser, dynamic blog preview (only shows if blogs exist), procurement CTA **with "Request Company Profile" modal**.
- `/about` — Company intro, mission/vision/values, real stats, certifications, founder card.
- `/services` — Two-track split (EPC vs CraftMyGarden teaser), 6 EPC services **each with its own "Get a Quote" button**, why-us block with certifications.
- `/projects` — 6 named EPC projects with metrics + prominent "Request Company Profile" banner at the top + secondary CTA at the bottom.
- `/company-profile` — Printable one-page profile (personalised via `?for=&org=` URL params). CIN/GSTIN/Udyam block, all certifications, company snapshot, leadership bio, EPC portfolio, tabular PO summary of all 6 named projects with metrics, clients strip (**incl. Indian Oil**) and contact details. One-click Download / Print PDF via browser print.
- `/gallery` — Dynamic media grid with lightbox; falls back to **captioned real project images** (title + caption + category) if backend empty.
- `/careers` — Dynamic (from `/api/careers`); **job titles and Apply buttons are clickable — they scroll to the application form and prefill the selected role**; contact strip uses new domain email + clickable address.
- `/blog` — Dynamic list w/ search + category filter + link to `/add-blog`.
- `/blog/[slug]` — Full article view w/ share button.
- `/contact` — Real address, phone, **info@a2zplantnutrient.com** email, working hours + form posts to `/api/contact`; Google map embed.

### Admin pages (public — no auth)
- `/admin` — Dashboard with tabs (Blogs / Media), delete with confirmation, links to add pages.
- `/add-blog` — Form: title, excerpt, content, author, category, tags, cover image (upload → base64, or URL).
- `/add-media` — Form: title, description, category, image/video toggle, upload (base64) or URL.

### Backend endpoints (`/api/*`)
- `GET /` health
- `POST/GET /blogs`, `GET /blogs/{slug}`, `PUT /blogs/{id}`, `DELETE /blogs/{id}` — with `?q=` and `?category=` filters.
- `POST/GET /media`, `DELETE /media/{id}`.
- `POST/GET /careers`, `DELETE /careers/{id}`.
- `POST /contact`.
- `POST /profile-requests` (captures procurement leads) · `GET /profile-requests` (lists submissions).
- `POST /seed` — idempotent seed of 3 EPC blogs, 4 careers, 10 media (also runs auto-seed on startup if empty).

### Audit fixes applied (2026-01-13, iteration 2)
- **Tagline** globally changed from "Grow & Eat Natural" → **"From Tender to Tree"**.
- **Email** globally changed from `a2zplantnutrient@gmail.com` → **`info@a2zplantnutrient.com`** (header, footer, contact, careers, company profile page).
- **Mobile navigation** verified working — hamburger toggle opens full-screen nav on mobile viewport.
- **Dead links fixed** — footer address is now a Google Maps link (opens in new tab), footer email uses new domain, careers job titles are now clickable buttons that scroll to apply form + prefill role.
- **"Get a Quote" CTA** added on hero (secondary button) and inside every service card on `/services`.
- **Gallery** captioned — each fallback tile now has a real title + caption + category, no empty gallery experience.
- **Institutional Clients** dedicated homepage section built — not buried on About page, showing NHAI, NTPC, NFL, Indian Oil, BHEL, Hindustan Copper as cards with sector chips and one-sentence context each.

## Testing
- **Iteration 1** (`/app/test_reports/iteration_1.json`): 100% backend + 100% frontend pass.
- **Iteration 2** (`/app/test_reports/iteration_2.json`): 100% backend + 100% frontend pass — all audit deltas verified (tagline, email, mobile nav, institutional-clients section, careers scroll, service quote buttons, company profile).
- Regression tests kept at `/app/backend/tests/backend_test.py`.

## Prioritized Backlog
### P0 — for user to provide
1. **Replace registration-number placeholders** in `lib/mock.js` (`COMPANY.cin`, `gstin`, `udyamNumber`) with actual values.
2. **Real project images** — replace `/service_XX.jpg` on `/projects` with actual site photographs of NHAI, NTPC, NFL, BHEL, VDA and Hindustan Copper deliverables.
3. **Verifiable financial / contract details** — confirm the ₹6.84 Cr number is safe to publish (or replace with a range like "₹5–10 Cr active order book").

### P1 — near-term enhancements
4. **Auth for admin pages** — currently `/admin`, `/add-blog`, `/add-media`, and DELETE endpoints are open. Add JWT + password (or Emergent Google Auth) before this goes to production.
5. **PDF company-profile download** on `/projects` procurement CTA — one-click PDF with ISO certificates + CIN/GSTIN + PO list.
6. **Tender/RFP submission form** with file-upload (RFP PDF) that emails Abhishek directly.
7. **Rich-text editor** on `/add-blog` (Tiptap or similar) instead of plain textarea.
8. **Blog edit page** (`/admin/blog/[id]/edit`) — currently only delete + view are wired.
9. **LinkedIn integration in footer** once profile is confirmed (Facebook/Instagram/Twitter were removed).

### P2 — future / CraftMyGarden brand
10. Build the CraftMyGarden sub-site (or subdomain) with e-commerce for indoor plants / gifting.
11. Multi-language (Hindi) toggle for government-facing pages.
12. Analytics dashboard on `/admin` (traffic, most-read blogs).
13. Client testimonials section — only re-add once real, verifiable client quotes are collected.

## Notes / Assumptions
- The `/gifting` page from the starter was removed since Gifting is no longer part of positioning (moves to CraftMyGarden later).
- Emergency contact for procurement teams is displayed prominently on home + projects pages.
- Admin dashboard link is in footer (subtle) to keep the surface professional.
