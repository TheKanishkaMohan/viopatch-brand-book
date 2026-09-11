# Viopatch — Print-Ready Brand Book & Interactive Review Monograph

> **Strategic Acquisition & Incubation Monograph**  
> Prepared for **Arti Gill · Giga Capital**  
> Published by **Unexo Life Sciences Private Limited** (Est. 1972)

---

## Overview

This repository hosts the **Viopatch Brand Book** — a luxury, print-ready publication designed for physical printing on heavy art paper stock with real transdermal patch sachets affixed inside.

It includes an interactive, turnable **3D Flipbook web application** with an integrated **visual commenting and review system** for collaborative feedback.

### Live Interactive Flipbook (GitHub Pages)
👉 **[Open Live Turnable Brand Book](https://thekanishkamohan.github.io/viopatch-brand-book/)**

---

## Key Features

1. **Realistic 3D Turnable Book**:
   - Powered by the zero-dependency [`Nodlik/StPageFlip`](https://github.com/Nodlik/StPageFlip) engine.
   - Dual-page spread display in landscape; single-page on mobile.
   - Touch drag, page clicks, and keyboard arrow navigation.

2. **Pin-Drop Review & Commenting System**:
   - Click **"Comments"** &rarr; **"Drop Pin"** to place a numbered annotation pin anywhere on the open pages.
   - Categorize comments: *Editorial Copy, Physical Sample & Die-Cut, Visual/Layout, Incubation Rationale, Transaction Structure*.
   - **One-Click Feedback for Chat**: Export all feedback into formatted GitHub Markdown ready to paste directly into AI/chat workflows.
   - All comments persist in `localStorage` across page reloads.

3. **Print-Ready Standards**:
   - **Page Format**: A4 Landscape ($297\text{ mm} \times 210\text{ mm}$ / $1123 \times 794\text{ px}$ at 96 DPI).
   - **High-Res PDF Export**: Click **"Print / PDF"** in the toolbar to generate 1:1 press-ready A4 landscape PDFs with proper margins and bleed formatting.
   - **Physical Sample Spreads**: Exact die-line cutouts with corner registration brackets and glue-dot placement targets for 5 product sachets.

---

## Monograph Architecture (18 Pages / 9 Spreads)

```
[ PAGE 1: COVER ] ───────────────────────────────────────────────────────
[ SPREAD 1 ] Page 2: Transmittal Monograph        │ Page 3: Category White Space ($3.5Bn market)
[ SPREAD 2 ] Page 4: Category-Defining Brand      │ Page 5: Product 1 Story (Knee Patch)
[ SPREAD 3 ] Page 6: Sample 1 Mount (120x120 mm)   │ Page 7: Product 2 Story (Back XL)
[ SPREAD 4 ] Page 8: Sample 2 Mount (140x100 mm)   │ Page 9: Product 3 Story (Multipurpose)
[ SPREAD 5 ] Page 10: Sample 3 Mount (100x70 mm)   │ Page 11: Product 4 Story (Large Patch)
[ SPREAD 6 ] Page 12: Sample 4 Mount (140x100 mm)  │ Page 13: Product 5 Story (Period Pain)
[ SPREAD 7 ] Page 14: Sample 5 Mount (100x100 mm)  │ Page 15: Brand-Incubation Thesis
[ SPREAD 8 ] Page 16: Transaction Architecture     │ Page 17: Meeting Agenda & Founder Intro
[ PAGE 18: BACK COVER ] ─────────────────────────────────────────────────
```

---

## Repository Contents

- `index.html` — Standalone flipbook app with embedded book spreads and commenting engine.
- `style.css` — 2026 Viopatch Brand Design System styling + `@media print` rules.
- `app.js` — Flipbook controller, pin placement, `localStorage` manager, and Markdown exporter.
- `st-page-flip.min.js` — Standalone local copy of StPageFlip.
- `assets/` — High-resolution packaging photography for all 5 product lines.
- `VIOPATCH-BRAND-BOOK-TEMPLATE.potx` — A4 Landscape PowerPoint presentation master template.
- `outline-refined.md` — Complete editorial copy, clinical data, and die-cut specifications.
- `BRAND_STYLE_GUIDE.md` — The authoritative 2026 Viopatch design system specification.

---

## Confidentiality Notice

*This document contains proprietary commercial concepts prepared exclusively for Giga Capital. Unauthorized reproduction is strictly prohibited.*
