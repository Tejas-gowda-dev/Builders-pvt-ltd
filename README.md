# Gowdru Realcom / Avani Nivas — Premium Business Website Demo

A modern, high-performance, and conversion-focused business website designed and built for **Gowdru Realcom Private Limited** and its flagship bespoke living brand, **Avani Nivas**.

---

## 🏛️ Company Profile & Verified Credentials

- **Entity**: Gowdru Realcom Private Limited
- **Brand / Development**: Avani Nivas
- **Founders & Directors**: Sharath Kumar A N and Palaksha
- **Industry Provenance**: Over 15 years of industry experience
- **Client Footprint**: 200+ satisfied clients across Karnataka, Orissa, and Chhattisgarh
- **Primary Regional Hubs**: Bengaluru (Mallathahalli & Rajarajeshwari Nagar), Tumkur, Mysuru, Hassan
- **Corporate Office**: Avani Nivas, 10th Main Road, 1st Cross, Adarsha Layout, Mallathahalli, Bengaluru 560056
- **Contact Numbers**: +91 9916337333 / +91 9916339333
- **Official Emails**: `info@gowdrurealcom.com` / `info@avaninivasa.com`

---

## ✨ Features & Architecture

1. **Brand & Architectural Aesthetic**
   - Refined neutral palette: warm off-white (`#FAF9F6`), charcoal (`#1A1918`), and warm architectural bronze/copper accent (`#C27848`).
   - Editorial typography: `Plus Jakarta Sans` for clean structural precision and `Playfair Display` for architectural headlines.
   - Large project photography with subtle hover zooms.

2. **Complete Page Architecture**
   - **Home**: Editorial hero, verified statistics bar (no fake stats), 6-pillar trust foundation, featured services, masonry project preview, 5-stage process, authentic client perspectives, and conversion CTAs.
   - **Services**: All 9 verified services (Turnkey Villa Construction, Kitchen Renovations, Interior Redesigns, Exterior Upgrades, Custom Carpentry, Bathroom Remodels, Home Additions, Energy-Efficient Upgrades, Basement Finishing) with full specification modals.
   - **Projects**: Masonry / editorial portfolio with category filtering (`All`, `Residential`, `Interiors`, `Renovation`, `Construction`), locations, area, scope, and multi-photo modal walkthroughs.
   - **About**: Company story, co-founders Sharath Kumar A N and Palaksha bios, regional operational presence, and engineering ethics.
   - **Partners**: Material and engineering ecosystem (UltraTech Cement, Tata Tiscon, Saint-Gobain, Häfele, Asian Paints, Kajaria, Jaquar, Schneider Electric) and architectural collaboration pathways.
   - **Contact**: Full enquiry form with budget selector, location selector, service dropdown, interactive Google Maps card, office address, and instant WhatsApp trigger.

3. **Lead Generation & Contact**
   - Strategic CTAs: "Get a Consultation", "Request Quote", "WhatsApp Us".
   - Floating WhatsApp button reading configurable `VITE_WHATSAPP_NUMBER` or `NEXT_PUBLIC_WHATSAPP_NUMBER` (defaults to verified +919916337333).
   - Instant consultation modal accessible from any section.

4. **WordPress Migration & 301 Redirects**
   - Full redirect engine in `src/data/migration.ts` mapping legacy WordPress URLs (`/about-us`, `/our-services`, `/portfolio`, `/contact-us`, `/sample-page`) to clean routes.
   - Ready-to-use configuration snippets for Next.js (`next.config.js`) and Nginx reverse proxies.

5. **SEO & Structured Data**
   - Schema.org JSON-LD `GeneralContractor` structured data embedded in `index.html`.
   - OpenGraph and Twitter card social previews.
   - Public `sitemap.xml` and `robots.txt`.

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env.local` or `.env`:

```bash
# Configurable business WhatsApp number (defaults to +91 9916337333)
VITE_WHATSAPP_NUMBER="919916337333"
NEXT_PUBLIC_WHATSAPP_NUMBER="919916337333"
```

### 3. Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Production Build

```bash
npm run build
```
